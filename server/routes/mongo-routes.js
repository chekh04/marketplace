const express = require('express');
const router = express.Router();
const {getDb} = require('../utils/mongo-db');
const { addProduct, getProducts, getProductById, editProduct, deleteProduct, filterProducts } = require('../controllers/mongo/productController');

router.post('/add-product', addProduct);
router.get('/products', getProducts);
router.get('/products/:id', getProductById)
router.post('/edit/:id', editProduct)
router.delete('/delete/:id', deleteProduct)

router.get('/filter-products', filterProducts)
router.post('/update-field-type', (req, res) => {
    return getDb().collection('products').updateMany({}, [
        {
            $set: {
                price: {$toDouble: "$price"}
            }
        }
    ]).then(() => res.send('UPDATED'))
})

module.exports = router;