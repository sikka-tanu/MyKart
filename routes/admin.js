const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

// GET call to /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.sendFile( path.join(rootDir, 'views', 'add-product.html'));
});

// POST call to /admin/add-product
router.post('/add-product', (req, res, next) => {
    res.sendFile( path.join(rootDir, 'views', 'shop.html'))
});

module.exports = router;