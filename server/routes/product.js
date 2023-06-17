const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

const {getProducts, getProductById, postProduct, updateProductById} = productController;

router.get('/get-products', getProducts);

router.post('/add-product', postProduct);
router.get('/get-product-by-id', getProductById);
router.patch('/update-product-by-id', updateProductById);


module.exports = router;