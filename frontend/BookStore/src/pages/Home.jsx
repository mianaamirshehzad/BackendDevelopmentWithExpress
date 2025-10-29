import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

function Home() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleThemeToggle = () => setDarkTheme((prev) => !prev);

  return (
    <div className={darkTheme ? "dark-theme" : ""}>
      <div className="topbar" style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "1rem",
        background: darkTheme ? "#222" : "#f5f5f5",
        borderBottom: "1px solid #ddd"
      }}>
        <button
          style={{
            background: "none",
            border: "none",
            marginRight: "1rem",
            cursor: "pointer",
            fontSize: "1.5rem"
          }}
          title="Add Product"
        >
          <FiPlus />
        </button>
        <button
          onClick={handleThemeToggle}
          style={{
            background: darkTheme ? "#444" : "#eee",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      {/* Add your homepage content here */}
      <div style={{ padding: "2rem" }}>
        <h2>Welcome to the Book Store!</h2>
        <p>Use the plus icon to add new products.</p>
      </div>
    </div>
  );
}

export default Home;