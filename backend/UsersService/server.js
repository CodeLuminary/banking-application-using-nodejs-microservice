const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors(
    {origin: '*'}
));

app.use(bodyParser.json());
app.use(express.static(__dirname));


app.all('/*',(req,res)=>{
     res.status(404).send({
         404: 'Not Found!'
     })
     //res.sendFile(path.join(__dirname,'static/error-page.html'))  
 })

const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`Server ${process.pid} started on port ${port}`)
});
    