const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    isEnabled:{
        type: Boolean,
        default: true
    },
    balance: {
        type: Number,
        default: 0.0
    },
    userRole: {
        type: String,
        default: 'user'
    },
    account_no: {
        type: String,
        required: true
    }
})
const Users = mongoose.model('users',userSchema);

module.exports = Users;