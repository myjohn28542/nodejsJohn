const Product = require('../models/product')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()


const create = async (req, res) => {
    try{
        const {name, price, brand, model, colors, description, identifier  } = req.body

        if (!(name && price && brand && identifier)) {
            return res.status(400).json({"detail" : "All input is required"});
        }

        

        const oldName = await Product.find({
            name: name
        })
        if (oldUser.length > 0) return res.status(409).json({ "detail": "User Already Exist"});


        // let encryptedPassword = await bcrypt.hash(password, 10)


        try { 
            Product.create({
                name, price, brand, model, colors, description, identifier
            },(err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    
                    
                    res.status(201).send(result)
                }
            })
        } catch(error){
            res.status(400).json({ message:'Error insert user to database'})
        }


    } catch (error){
        return res.status(400).json({ message: error.message})
    }
}



module.exports = {
    create
}