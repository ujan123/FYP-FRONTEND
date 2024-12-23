import React, { useState } from 'react';
import './Navbar.css'; // Import the attractive CSS styles
import logo from './logo.png'; // Import the logo image (adjust path as needed)
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="BikeStore Logo" className="logo-image" />
        </a>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar-menu" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/bikes">Bikes</a></li>
        <li><a href="/rental">Rental</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li>
          <a href="/cart" className="navbar-cart">
            <FaShoppingCart style={{ marginRight: '5px' }} />
            Cart
          </a>
        </li>
        <li>
          <a href="/login" className="navbar-login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
