import { NavLink } from "react-router-dom";
import "./NavBar.css";

// defining the navbar component
function NavBar(){
    return(
        <nav>
            <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/gallery"
        className="nav-link"
      >
        Gallery
      </NavLink>
      <NavLink
        to="/artist"
        className="nav-link"
      >
        Artist
      </NavLink>
        </nav>
    );
};
export default NavBar;