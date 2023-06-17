const mysql = require('mysql2');
const path = require('path');
const { Sequelize } = require('sequelize');
require('dotenv').config({path: '../.env'});

const {DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD} = process.env;

console.log(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD);
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: 'db',
    dialect: 'mysql'
});

module.exports = sequelize;

// const pool = mysql.createPool({
//     host: 'db',
//     user: DATABASE_USER,
//     database: DATABASE_DBNAME,
//     password: DATABASE_PASSWORD,
// });

// module.exports = pool.promise();

// module.exports = sequelize;
