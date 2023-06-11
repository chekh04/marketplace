const db = require("../utils/db");
const Product = require('../models/product');


exports.getProducts =  (req, res) => {
    Product.fetchAllProducts().then( data => res.send(data[0]))
    // res.send('OK')
}

exports.postProduct = (req, res) => {
    const { productName, price, description } = req.body;
    const product = new Product(productName, description, price);
    product.saveProduct();
    // res.send('OK');
}
