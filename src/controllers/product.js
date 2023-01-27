const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const user = require('../models/user')

dotenv.config()


const createProduct = async (req, res) => {
    try{
        const {name, price, brand, identifier, org, colors,model} = req.body
        // const {token} = res.body
        // console.log("res: "+token)
        // console.log("res: "+JSON.stringify(token));
        if (!(name && price && brand && identifier && org)) {
            return res.status(400).json({"detail" : "All input is required"});
        }

        const oldName = await Product.find({
            name: name
        })
        if (oldName.length > 0) return res.status(409).json({ "detail": "Product Already Exist"});


        // let encryptedPassword = await bcrypt.hash(password, 10)


        try { 
            Product.create({
                name, price, brand,  identifier, org,colors ,model
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Product to database'})
        }


    } catch (error){
        return res.status(400).json({ message: error.message})
    }
}

const updateProduct = async (req,res) => {

    try{
        const {name, price, brand,colors ,description, identifier, org  } = req.body
        // req.user.id
        try { 
            Product.findByIdAndUpdate(req.params.id,{
                name, price, brand, colors,description, identifier, org
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Product to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const deleteProduct = async (req,res) => {

    try{
        const {name, price, brand, identifier, org  } = req.body
        // req.user.id
        try { 
           
            Product.findByIdAndRemove(req.params.id,{
                name, price, brand,  identifier, org
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(200).send(result)
                }
            })
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Product to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findByIdProduct = async (req,res) => {

    try{
        try { 
            Product.findById(req.params.id).exec(
               (err, result) => {
                    if (err) res.status(500).json({ message: err.message})
                    else {
                        res.status(200).send(result)
                        }
                    }
            );
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Product to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}

const findProduct = async (req,res) => {

    try{
        try { 
            Product.find({ },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    res.status(201).send(result)
                }
            });
           
        } catch(error){
            console.log("error: "+error)
            res.status(400).json({ message:'Error insert Product to database'})
        }


    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
}
module.exports =  {
    createProduct,
    updateProduct,
    deleteProduct,
    findByIdProduct,
    findProduct
 }

