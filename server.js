const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require("fs");


app.use(express.static('public'));

app.get('/', (req, res) => {
    const filePath = __dirname + '/views/index.html'
    res.sendFile(filePath);
})
app.get('/CSS/styles.css', (req, res) => {
    const filePath = __dirname + '/public/CSS/styles.css'
    res.sendFile(filePath);
})

app.get('views/images/toystore.png', (req, res) => {
    const filePath = __dirname + 'views/images/toystore.png'
    res.sendFile(filePath);
})
