const Product = require("../../models/mongo/product");
const { getDb } = require("../../utils/mongo-db");

exports.addProduct = (req, res) => {
    const {productName, description, price} = req.body;
    const product = new Product(productName, description, price);
    console.log(req.body);
    product.save()
    .then(() => res.send('Good'))
    .catch(() => {
        console.log('Something went wrong')
        res.status(500),
        res.send('error')
    });
}

exports.getProducts = (req, res) => {
    Product.fetchAll()
    .then(data => res.send(data))
    .catch(() => console.log('ERROR!'));
}

exports.getProductById = (req, res) => {
    Product.getProductById(req.params.id).then(data => res.send(data))
}

exports.editProduct = (req, res) => {
    const {productName, description, price} = req.body;
    const id = req.params.id;
    const product = new Product(productName, description, price);
    product.modifyProduct(id).then(() => res.send("UPDATED"));
}

exports.deleteProduct = (req, res) => {
    return Product.deleteProduct(req.params.id).then(() => res.send('Deleted'));
}

exports.filterProducts = (req, res) => {
    return getDb().collection('products').find({price: {$gte: 34.5}}).toArray()
    .then(data => res.send(data));
}