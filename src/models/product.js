const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
   
    name: {
        type: String,
        require: true
    },
    
    price: {
        type: Number,
        require: true
    },
    brand:{
        type: String,
        require: true
    },
    model: String,

    colors: [String],

    description: String,

    identifier: {
        type: String,
        require: true
    }


})

module.exports = ProductSchema