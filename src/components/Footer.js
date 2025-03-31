import React from "react";
import "./Footer.css"; // Import the CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>E-Shop</h4>
          <p>Your one-stop shop for modern essentials.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/product">Product</a></li>
            <li><a href="/hero">Hero</a></li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>support@eshop.com</p>
          <p>+1 234 567 890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}
