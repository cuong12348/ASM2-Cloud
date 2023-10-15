const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const { render } = require('ejs');
const { restart } = require('nodemon');


// express app
const app = express();
//Connect to mongodb
const dbURI ='mongodb+srv://cuongpcgcs210871:cuong2003@cluster0.hy5vmd1.mongodb.net/ProductDB3?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000, ()=>console.log('Connect to db')))
  .catch(err => console.log(err));

// register view engine
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    //res.send('<p>homepage</p>')
    res.redirect('/Product');
});

app.get('/Product/create', (req,res)=>{
    res.render('create',{title: 'Add new Product'});
});

app.post('/Product',(req,res)=>{
  const product = new Product(req.body);

  product.save()
    .then((result)=>{
        res.redirect('/Product')
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.get('/Product',(req,res)=>{
    Product.find().sort({createdAt: -1})
        .then((result)=>{
            res.render('index',{title:'Product',Product: result})
        })
        .catch((err)=>{
            console.log(err);
        })
})
app.get('/Product/:id',(req,res)=>{
    const id = req.params.id;
    Product.findById(id)
        .then(result =>{
            res.render('details',{Product: result, title: 'Product Details'})
        })
        .catch(err=>{
            console.log(err);
        })
})
app.get('/Product/delete/:id',(req,res)=>{
    const id = req.params.id;

    Product.findByIdAndDelete(id)
     .then(result=>{
        res.redirect('/Product');
    
    }) 
    .catch(err =>{
        console.log(err);
    })

})
app.get('/Product/edit/:id',(req,res)=>{
    let id =req.params.id;
    Product.findById(id)
     .then(result=>{
        res.redirect('/edit');
     
    })
    .catch(err =>{
        console.log(err);
    })
})
