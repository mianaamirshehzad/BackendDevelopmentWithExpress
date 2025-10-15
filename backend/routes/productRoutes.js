const express = require("express");
const { createProduct, deleteProduct } = require("../controllers/productController.js");

const router = express.Router();

router.post("/products", createProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;