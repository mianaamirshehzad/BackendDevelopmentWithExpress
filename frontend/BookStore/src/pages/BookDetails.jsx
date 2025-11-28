import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <p>Loading book details...</p>;

  return (
    <div className="page-container">
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <p><strong>ID:</strong> {book._id}</p>
      <Link to={`/edit/${book._id}`}>Edit</Link>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default BookDetails;
