const express = require('express');
const router = express.Router();
const storeController = require('./storeController');

router.get('/allProducts', storeController.allProducts);
router.get('/productsByCategory/:category', storeController.filteredProducts);

module.exports = router