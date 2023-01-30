const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true 
    },
    password: {
        type: String,
        require: true
    },
    fullName: String,
    lostName: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    isActive: {
        type : Boolean,
        default : true
    },
    verifyEmail: {
        type : Boolean,
        default : false
    }
    
},{
    timestamps: true
})

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' })

module.exports = mongoose.model("User", UserSchema)