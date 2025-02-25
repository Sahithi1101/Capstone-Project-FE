import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"; 

const Header = () => {
  const [value, setValue] = useState(0);

return (
<header className="app-header">
  <nav className="navbar">
    <Link to="/" className="brand-logo">
    <img src="https://media0.giphy.com/media/1wQtkhfeLxIaRMsRcy/source.gif" alt="Library Icon" /> {/* Use an image */}
    </Link>
    <h1>BookNest</h1>

    <div className="tabs">
      <Link to="/view" className={`tab ${value === 0 ? "active" : ""}`}
      onClick={() => setValue(0)}>
        Books
      </Link>
      
      <Link to="/add" className={`tab ${value === 1 ? "active" : ""}`}
      onClick={() => setValue(1)}>
        Add Books
      </Link>
      
      <Link to="/login" className={`tab ${value === 2 ? "active" : ""}`}
      onClick={() => setValue(2)}>
        Login
      </Link>
      </div>
      </nav>
    </header>
  );
};

export default Header;


