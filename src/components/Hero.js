import React from "react";
import "./Hero.css"; // Import the CSS file

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-banner">
          <img src="/images/carousel-1.jpg" alt="Banner" />
          <div className="hero-overlay">
            <div className="hero-content">
              <h2>Spring Sale 2025</h2>
              <p>Up to 50% Off Everything</p>
              <button className="hero-button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
