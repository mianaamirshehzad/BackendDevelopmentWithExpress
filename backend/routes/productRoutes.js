const express = require("express");
const { createProduct, deleteProduct, getAllProducts, updateProduct } = require("../controllers/productController.js");

const router = express.Router();

router.post("/products", createProduct);
router.delete("/product/:id", deleteProduct);
router.get("/products", getAllProducts);
router.put("/product/:id", updateProduct);

module.exports = router;