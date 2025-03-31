import React from "react";
import "./Product.css"; // Import the CSS file

export default function Product() {
  return (
    <section className="product-section">
      <div className="product-container">
        <h2 className="product-title">Featured Products</h2>
        <div className="product-grid">
          {[
            { img: "/images/gallery-1.jpg", name: "Cool Sneakers", price: "$59.99" },
            { img: "/images/gallery-2.jpg", name: "Smart Watch", price: "$99.99" },
            { img: "/images/gallery-3.jpg", name: "Headphones", price: "$79.99" },
            { img: "/images/gallery-4.jpg", name: "Backpack", price: "$39.99" },
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
