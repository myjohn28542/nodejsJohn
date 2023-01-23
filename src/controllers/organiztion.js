const Organiztion = require('../models/organiztion')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const user = require('../models/user')

dotenv.config()

const createOrganiztion = async (req, res) => {
    try{
        const { name, user} = req.body
        // const {token} = res.body
        // console.log("res: "+token)
        // console.log("res: "+JSON.stringify(token));
        if (!(name && user) ) {
            return res.status(400).json({"detail" : "All input is required"});
        }

        const oldName = await Organiztion.find({
            name: name
        })
        if (oldName.length > 0) return res.status(409).json({ "detail": "Organiztion Already Exist"});


        // let encryptedPassword = await bcrypt.hash(password, 10)


        try { 
            Organiztion.create({
                name, user
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Organiztion to database'})
        }


    } catch (error){
        return res.status(400).json({ message: error.message})
    }
}

const updateOrganiztion = async (req,res) => {

    try{
        const {name, user  } = req.body
        // req.user.id
        try { 
            Organiztion.findByIdAndUpdate(req.params.id,{
                name, user
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Organiztion to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const deleteOrganiztion = async (req,res) => {

    try{
        const {name, user   } = req.body
        // req.user.id
        try { 
           
            Organiztion.findByIdAndRemove(req.params.id,{
                name, user 
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Organiztion to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findByIdOrganiztion = async (req,res) => {

    try{
        try { 
            Organiztion.findById(req.params.id).exec(
               (err, result) => {
                    if (err) res.status(500).json({ message: err.message})
                    else {
                        res.status(200).send(result)
                        }
                    }
            );
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Organiztion to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findOrganiztion = async (req,res) => {

    try{
        try { 
            Organiztion.find({ },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(201).send(result)
                }
            });
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Organiztion to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

module.exports =  {
    createOrganiztion,
    updateOrganiztion,
    deleteOrganiztion,
    findOrganiztion,
    findByIdOrganiztion
 }