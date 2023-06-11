const mysql = require('mysql2');
// const path = require('path');
// require('dotenv').config({path: path.join(__dirname, '../.env')});

const {DATABASE_USER, DATABASE_DBNAME, DATABASE_PASSWORD} = process.env;
console.log('DATABASE: ', process.env)

// const sequelize =
//     new Sequelize(DATABASE_DBNAME, DATABASE_USER, DATABASE_PASSWORD,
//         {
//             host: 'db',
//             dialect: 'mysql'
//         })

const pool = mysql.createPool({
    host: 'db',
    user: DATABASE_USER,
    database: DATABASE_DBNAME,
    password: DATABASE_PASSWORD,
});

module.exports = pool.promise();

// module.exports = sequelize;
