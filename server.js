const express = require('express')
const app = express();
const dotenv = require('dotenv').config();

const path = require('path');

const AboutRoute = require('./Routes/AboutRoute');

const port = process.env.PORT || 5050;


app.use('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname+'/Public/AboutPage.html'))
})


app.use('/about', AboutRoute)


app.listen(port, () => {
    console.log(`Server is started on port: ${port}`);
})