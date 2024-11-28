import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h1>ZCRYPTO</h1>
        </div>

        {/* Connect Wallet */}
        <button className="connect-wallet">
          <NavLink to="/listZcrypto" className="wallet-link">
            Connect Wallet
          </NavLink>
        </button>

        {/* Menu Toggle Icon */}
        <div
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="scroll-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="discover"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="scroll-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover_Z
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="earn"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="scroll-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Earn
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="scroll-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
