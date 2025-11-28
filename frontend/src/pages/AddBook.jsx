import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BooksApi from "../api/BooksApi";

function AddBook() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      name: product.name,
      price: Number(product.price),
      image: product.image || ""
    };

    const response = await BooksApi.addNewBook(params);
    console.log("New Product created", response);

    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={product.image}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddBook;
