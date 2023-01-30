const jwt = require("jsonwebtoken");
const User = require('../models/user')
const config = process.env;

const verifyEmail = (req, res, next) => {
  try{
    try { 
        User.findById(req.params.id).exec(
           (err, result) => {
                if (err) res.status(500).json({ message: err.message})
                else {
                    console.log(result)
                    res.status(200).send(result)
                    }
                }
        );
       
    } catch(error){
        console.log("error: "+error)
        res.status(400).json({ message:'Error insert User to database'})
    }

    }catch (error){
        console.log(error)
        return res.status(400).json({ message: error.message})
    }
  next();
};

module.exports = verifyEmail;