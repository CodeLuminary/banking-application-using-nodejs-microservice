const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const fetch = require("node-fetch");
const axios = require('axios');
const mongoose = require('mongoose');
const user = require('./controllers/userController.js')

const app = express();

app.use(cors(
    {origin: '*'}
));

app.use(bodyParser.json());
app.use(express.static(__dirname));

//Connect to mongodb
mongoose.connect(
    'mongodb://database:27017/bankingDB',
    { useNewUrlParser: true }
)
.then(() => {
    console.log('MongoDB Connected yes');
    user.checkForAdmin().then(result=>{
        if(!result){
            user.addAdminUser()
            .then(result=>console.log(result))
        }
    });
})
.catch(err => console.log(err));

app.get('/users',(req,res)=>{
    user.getAllUsers()
    .then(result=>res.send(result))
})

app.post('/add-user',(req,res)=>{
    user.addUser(req.body)
    .then(result=>res.send(result));
})

app.get('/users/trans',(req,res)=>{
    
    axios.get('http://transaction:3000')
    .then(response=>{
        res.send(response.data)
    })
})

app.all('/*',(req,res)=>{
     res.status(404).send({
         404: 'Not Found!'
     })
     //res.sendFile(path.join(__dirname,'static/error-page.html'))  
 })

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server ${process.pid} started on port ${port}`)
});
    