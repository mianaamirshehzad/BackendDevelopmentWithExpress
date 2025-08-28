const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/db.js");
const Product = require("./models/productModel.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
dotenv.config();
connectDB();

// Middleware - allows to accept JSON data in the request body
app.use(express.json());

// Basic route
app.post("/api/products", async (req, res) => {
  const product = req.body; // Data sent by the use in the request

  if (!product.name || !product.image || !product.price) {
    return res.status(400).json({
      success: false,
      message: "Provide all the required fields",
    });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({
        success: true,
        data: newProduct
    })
  } catch (error) {
    console.log("Error in creating prodcut ", error);
    res.send(501).json({
        success: false,
        message: "Internal Server Error"
    })
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
