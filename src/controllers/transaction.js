const Transaction = require('../models/transaction')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const user = require('../models/user')

dotenv.config()

const createTransaction = async (req, res) => {
    try{
        const { products, user, paymentStatus, totalAmount} = req.body
        
        if (!(products && user) ) {
            return res.status(400).json({"detail" : "All input is required"});
        }

        // const oldName = await Organiztion.find({
        //     name: name
        // })
        // if (oldName.length > 0) return res.status(409).json({ "detail": "Organiztion Already Exist"});


        // let encryptedPassword = await bcrypt.hash(password, 10)


        try { 
            Transaction.create({
                products, user, paymentStatus, totalAmount
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Transaction to database'})
        }


    } catch (error){
        return res.status(400).json({ message: error.message})
    }
}

const updateTransaction = async (req,res) => {

    try{
        const {products, user, paymentStatus, totalAmount  } = req.body
        // req.user.id
        try { 
            Transaction.findByIdAndUpdate(req.params.id,{
                products, user, paymentStatus, totalAmount
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Transaction to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const deleteTransaction = async (req,res) => {

    try{
        const {products, user, paymentStatus, totalAmount  } = req.body
        // req.user.id
        try { 
           
            Transaction.findByIdAndRemove(req.params.id,{
                products, user, paymentStatus, totalAmount
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Transaction to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findByIdTransaction = async (req,res) => {

    try{
        try { 
            Transaction.findById(req.params.id).exec(
               (err, result) => {
                    if (err) res.status(500).json({ message: err.message})
                    else {
                        res.status(200).send(result)
                        }
                    }
            );
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Transaction to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findTransaction = async (req,res) => {

    try{
        try { 
            Transaction.find({ },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(201).send(result)
                }
            });
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Transaction to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

module.exports =  {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    findTransaction,
    findByIdTransaction
 }