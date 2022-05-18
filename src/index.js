const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

const DB = 'mongodb+srv://evanesco:2807riya@cluster0.clivo.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('Connection Established');
}).catch((err)=> console.log('Error'));

const port = 8000
const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath));
/*
app.get('/', (req,res) => {
    res.send('Hello World! :D')
})
app.get('/about', (req,res) => {
    res.send('About')
})
*/
app.listen(port, () => {
    console.log(`Example app listening at ${port}`);
    //console.log(path.join(__dirname,'../public'));
})

