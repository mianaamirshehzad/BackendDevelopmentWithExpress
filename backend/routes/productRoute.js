const express = require("express");
const { createProduct } = require("../controllers/productController.js");

const router = express.Router();

router.post("/products", createProduct);

module.exports = router;