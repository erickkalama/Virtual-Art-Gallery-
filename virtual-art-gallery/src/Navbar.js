import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Your Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
      </div>
      <div className="navbar-right">
        <a href="#">Artist</a>
        <a href="#" className="contact-us">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
