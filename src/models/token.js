const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema({
   
    code:  String,
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User',
        require: true
    }


},{
    timestamps: true
})
module.exports = mongoose.model("Token", TokenSchema)
