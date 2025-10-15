const Product = require("../models/productModel.js");

exports.createProduct = async (req, res) => {
  const product = req.body;

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
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in creating product", error);
    res.status(501).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const {id} = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    })
  } catch (error) {
    console.log("Error in deleting product ", error);
    res.status(501).json({
      success: false,
      message: "Error Deleting Product",
    })
  }
};