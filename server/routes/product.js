const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.get('/get-products', productController.getProducts);

router.post('/add-product', productController.postProduct);


module.exports = router;