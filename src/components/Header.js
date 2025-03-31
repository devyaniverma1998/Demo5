import React from "react";
import "./Header.css"; // Import the CSS file

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="left-section">
          <button className="menu-button">
            <i className="fas fa-bars"></i>
          </button>
          <h1>E-Shop</h1>
        </div>

        <nav>
          <a href="/">Home</a>
          {/* <a href="/">Contact</a>
          <a href="/">Blog</a> */}
        </nav>

        <div className="right-section">
          <input type="text" placeholder="Search..." className="search-box" />
          <button className="cart-button">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-badge">3</span>
          </button>
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  );
}
