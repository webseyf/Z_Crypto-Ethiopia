import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <h2>ZCRYPTO</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/earn">Earn</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: seyfadin@zcrypto.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ZCRYPTO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
