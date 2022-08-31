const usersModel = require('../models/users.js');

const checkForAdmin = ()=>{
    return new Promise((resolve, reject)=>{
        usersModel.findOne({userRole: 'admin'})
        .then(result=>{
            resolve(result)
        })
        .catch(error=>resolve(result))
    })
}

const addAdminUser = () =>{
    return new Promise((resolve,reject)=>{
        const user = new usersModel({
            userRole: 'admin',
            name: 'John Doe',
            email: 'john.doe@codeluminarybank.com',
            password: 'SocialNerd.123',
            balance: 1000,
            account_no: '1223566549'
        })

        user.save()
        .then(result=>resolve(result))
        .catch(error=>resolve(error))
    })
}

const addUser = (userObject)=>{
    return new Promise((resolve,reject)=>{
        const user = new usersModel(userObject)
        user.save()
        .then(result=>resolve({
            isSuccessful: true,
            data:result
        }))
        .catch(error=>resolve({
            isSuccessful: false,
            data: error
        }))
    })
}

const getAllUsers = ()=>{
    return new Promise((resolve,reject)=>{
        usersModel.find()
        .then(result=>resolve(result))
        .catch(error=>resolve(error))
    })
}

module.exports = {
    checkForAdmin,
    addAdminUser,
    getAllUsers,
    addUser
}