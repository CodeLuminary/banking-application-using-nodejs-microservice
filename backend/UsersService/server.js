const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https')
//const fetch = require("node-fetch");
const axios = require('axios')

const app = express();

app.use(cors(
    {origin: '*'}
));

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/users',(req,res)=>{
    res.send({
        isSuccessful: true,
        message: 'I worked'
    })
})

app.get('/users/yes',(req,res)=>{
    res.send({
        isSuccessful:true,
        message: 'yess'
    })
})

app.get('/users/trans',(req,res)=>{
    /*fetch("http://transaction:3000/")
    .then(result=>result.json)
    .then(result=>res.send(result))*/
    /*https.request({
        hostname: 'http://transaction:3000',
        method: 'GET'
    }, result=>{
        result.on('data', d=>{
            res.send(d)
        })
    })*/
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
    