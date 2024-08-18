// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// // defining the navbar component
// function NavBar(){
//     return(
//         <nav>
//             <NavLink
//         to="/"
//         /* add styling to Navlink */
//         className="nav-link"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/about"
//         className="nav-link"
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/gallery"
//         className="nav-link"
//       >
//         Gallery
//       </NavLink>
//       <NavLink
//         to="/artist"
//         className="nav-link"
//       >
//         Artist
//       </NavLink>
//         </nav>
//     );
// };
// export default NavBar;



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
