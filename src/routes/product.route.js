
const express = require('express');

const productModel = require('./../models/product.model');

const router = express.Router();

const controller = require('./../controllers/product.controller');

const path = require('path');

router.get('/list', controller.productList);

router.post('/add', controller.addProduct);


router.post('/edit/:id', controller.editProduct);
router.post('/delete/:id', controller.deleteProduct);

module.exports = router;