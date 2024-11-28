import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Welcome to Ethio ZCRYPTO</h1>
        <p>
          Discover the future of cryptocurrency trading and investment with Ethio
          ZCRYPTO. Join us to explore advanced blockchain technology and secure
          transactions tailored for Ethiopia and beyond.
        </p>
        <button className="hero-button">
      <Link to="/listZcrypto">View All Cryptocurrencies</Link>
    </button>
      </div>
      <div className="hero-image">
        <img
          src="/hero-img.png"
          alt="Cryptocurrency Illustration"
        />
      </div>
    </section>
  );
};

export default Hero;
