const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TransactionSchema = new Schema({
   
    products: [Schema.Types.ObjectId],
    user: {
        type: Schema.Types.ObjectId,
        ref : 'User',
        require: true
    },
    paymentStatus: {
        type : String
       
    },
    totalAmount:{
        type: Number
    }


},{
    timestamps: true
})
module.exports = mongoose.model("Transaction", TransactionSchema)
