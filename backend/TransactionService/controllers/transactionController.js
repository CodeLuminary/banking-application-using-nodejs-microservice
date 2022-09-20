const transactionModel = require('../models/transactions');

const getAllUserTransactions = (user_id)=>{
    return new Promise((resolve,reject)=>{
        transactionModel.find({$or:[{to: user_id}, {from: user_id}]})
        .then(result=>resolve({isSuccessful: true,data:result}))
        .catch(error=>resolve({isSuccessful: false, data:error}))
    })
}

module.exports = {
    getAllUserTransactions
}