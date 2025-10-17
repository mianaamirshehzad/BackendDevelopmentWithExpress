const { default: mongoose } = require("mongoose");
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

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      message: "Successfully fetched all products",
      data: products
    })
  } catch (error) {
    console.log("Error in fetching products", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    })
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({
      success: false,
      message: "Invalid product Id"
    })
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct
    })
  } catch (error) {
    console.log("Error updating product => ", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    })
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