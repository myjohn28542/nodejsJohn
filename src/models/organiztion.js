const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  Organiztion = new Schema({
   
    name: {
        type: String,
        require: true,
        description: String
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
    


},{
    timestamps: true
})
module.exports = mongoose.model("Organiztion", Organiztion)