const { ObjectId } = require('mongodb');
const {getDb} = require('../../utils/mongo-db');

class Product {
    constructor(productName, description, price) {
        this.productName = productName;
        this.description = description;
        this.price = price;
    }
    save() {
    return getDb().collection('products').insertOne(this)
    }
    modifyProduct(id) {
        return getDb().collection('products').updateOne({_id: new ObjectId(id)}, {$set: this})
    }
    static fetchAll() {
        return getDb().collection('products').find().toArray();
    }
    static getProductById(id) {
        return getDb().collection('products').find({_id: new ObjectId(id)}).next();
    }
    static deleteProduct(id) {
        return getDb().collection('products').deleteOne({_id: new ObjectId(id)});
    }
}

module.exports = Product;