const express = require('express');

const router = express.Router();

const ProductsController = require('../controllers/ProductsController');

// GET call to /admin/add-product
router.get('/add-product', ProductsController.getAddProduct);

// POST call to /admin/add-product
router.post('/add-product', ProductsController.postAddProduct);

// GET call to /admin/products
router.get('/products', ProductsController.getAdminProducts);

module.exports = router;