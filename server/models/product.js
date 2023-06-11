const db = require("../utils/db");
// const Sequelize = require('sequelize');
// const sequelize = require('../utils/db');

// const product = sequelize.define('product', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     }
// })

module.exports = class Product {
    constructor(productName, description, price) {
        this.productName = productName;
        this.description = description;
        this.price = price;
    }

    saveProduct() {
        return db.execute(
            `INSERT INTO products
                (productName, description, price)
                VALUES (?, ?, ?)`,
            [this.productName, this.description, this.price]
        );
    }

    static fetchAllProducts() {
        return db.execute('SELECT productName, description, price FROM products');
    }
}
