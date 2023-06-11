const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());

app.use((req, res, next) => {
    next();
});

app.get('/', (req, res) => {
    res.send('Initial page')
})

app.use(productRoutes);


app.listen(3000, () => {
    console.log('Server listening on 3000')
})