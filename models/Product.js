const mongoose = require('mongoose');
const schema = mongoose.Schema;


const ProductSchema = new schema({
    ProductID: {
        type: String,
        required: true
    },
    ProductName:{
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Description:{
        type: String,
        required: true,
    }
}, {timestamps: true, versionKey: false});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;