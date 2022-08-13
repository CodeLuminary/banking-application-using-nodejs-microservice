const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    initiated_by:{
        type: String,
        required: true
    },
    from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    isSuccesful:{
        type: Boolean,
        default: false
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})
const Transactions = mongoose.model('transaction',transactionSchema);

module.exports = Transactions;