// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import logoc from './logoc.jpeg'; // Import the logo image

const Navbar = () => {
  return (
    // The Navbar component with links to different sections of the application
    <nav className="navbar">
      <div className="navbar-logo" id="logo">
        <img src={logoc} alt="Logo" className="logo" />

      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
   
  );
};

export default Navbar;
