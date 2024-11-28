import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; // Smooth scrolling
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

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
            {isHomePage ? (
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
            ) : (
              <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </NavLink>
            )}
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Discover_Z
              </NavLink>
            )}
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Earn
              </NavLink>
            )}
          </li>
          <li>
            {isHomePage ? (
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
            ) : (
              <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
