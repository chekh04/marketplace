const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const cors = require('cors');
const sequelize = require('./utils/db');
const app = express();
const Product = require('./models/sequelize/product');
const User = require('./models/sequelize/user');


app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    User.findByPk(1)
    .then(user => {
        req.user = user;
        next();
    })
})
app.use(bodyParser.json())
app.use(cors());

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send('Initial page')
})

app.use(productRoutes);

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

sequelize.sync()
.then(() => User.findByPk(1))
.then( user => {
    if (!user) {
        User.create({name: 'Sasha', email: 'cheh170804@gmail.com'})
    }
    app.listen(3000, () => {
        // console.log('Server listening on 3000')
    })
}).catch(() => console.log('Connection lost'))

