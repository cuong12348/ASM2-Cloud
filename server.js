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
// Add Product Route
app.post('/add-product', (req, res) => {
    // Implement product addition logic here
});
// Delete Product Route
app.post('/delete-product', (req, res) => {
    // Implement product deletion logic here
});
// Edit Product Route
app.post('/edit-product', (req, res) => {
    // Implement product editing logic here
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})