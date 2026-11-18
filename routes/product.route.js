const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller.js');

// GET all products
router.get('/', getProducts);

// GET a single product by ID
router.get('/:id', getProduct);

// POST create a new product
router.post('/', createProduct);

// PUT update a product by ID
router.put('/:id', updateProduct);

// DELETE a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
