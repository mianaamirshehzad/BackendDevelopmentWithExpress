import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BooksApi from "../api/BooksApi";

function Home() {
  const [books, setBooks] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await BooksApi.getAllBooks();
      console.log("Products fetched: ", response);
      setBooks(response.data);
    } catch (error) {
      console.error("Failed to fetch products =>", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteBook = async (id) => {
    try {
      await BooksApi.deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Failed to delete book =>", error);
    }
  };

  return (
    <div className="page-container">
      <h2>Available Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <h3>{book.name}</h3>
            <p>Price: ${book.price}</p>
            <div className="actions">
              <Link to={`/book/${book._id}`}>View</Link>
              <Link to={`/edit/${book._id}`}>Edit</Link>
              <button onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
