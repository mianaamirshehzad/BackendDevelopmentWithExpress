import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/books") // adjust your backend URL
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/api/books/${id}`, { method: "DELETE" });
    setBooks(books.filter((b) => b._id !== id));
  };

  return (
    <div className="page-container">
      <h2>Available Books</h2>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
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
