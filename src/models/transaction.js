const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
   
    Products: [{
        type: Schema.Types.ObjectId,
        ref : 'Product',
        require: true
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User',
        require: true
    },
    PaymentStatus: {
        type : String
       
    },
    totalAmount:{
        type: Number
    }


},{
    timestamps: true
})
module.exports = mongoose.model("Transaction", TransactionSchema)
