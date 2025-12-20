import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import "./App.css";
import Signup from "./pages/authentication/Signup";

function App() {
  return (
    <div style={styles.container}>
      <Signup />
      {/* <nav className="navbar">
        <h2>Book Store</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/add">Add Book</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes> */}
    </div>
  );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
    }
}

export default App;
