const db = require("../utils/db");
const Product = require('../models/sequelize/product');

exports.getProducts =  (_, res) => {
    // Product.fetchAllProducts().then( data => res.send(data[0]))
    Product.findAll().then(data => {
        res.send(data)
    })
}

exports.postProduct = (req, res) => {
    console.log(req.body);
    // const product = new Product(productName, description, price);
    // product.saveProduct();
    Product.create(req.body)
    .then(() => res.send('OK'))
    .catch(() => res.statusCode(500)); 
}

exports.getProductById  = (req, res) => {
    const {id} = req.query;
    Product.findByPk(id)
    .then(data => res.send(data));
}
exports.updateProductById = (req, res) => {
    console.log(req.body);
    const { productName, description, price, id } = req.body;
    Product.findByPk(id).then(product => {
        product.title = productName;
        return product.update({
            title: productName,
            description,
            price
        })
    }).then(() => res.send('OK'))
}
