const express = require('express');
var fs = require('fs');
var path = require('path');

const app = express();

app.use(express.static(__dirname));

app.all('/*',(req,res)=>{   
    res.sendFile(path.resolve(__dirname, "index.html"));
    /*res.status(404).send({
         404: 'Not Found!'
     })*/
     //res.sendFile(path.join(__dirname,'static/error-page.html'))  
 })

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    console.log(process.versions.node)
    const port = process.env.PORT || 3000;
    app.listen(port, () =>{console.log(`Server started on port ${port}`)})  
}