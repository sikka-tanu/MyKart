const express = require("express");

const router = express.Router();

const ProductsController = require('../controllers/ProductsController');
const ShopController = require('../controllers/ShopController');

router.get("/", ProductsController.getIndex);

router.get("/products", ProductsController.getProducts);

router.get('/products/:id', ProductsController.getProductById);

router.get('/cart', ShopController.getCart);

router.get('/checkout', ShopController.getCheckout);

router.get('/orders', ShopController.getOrders);

module.exports = router;