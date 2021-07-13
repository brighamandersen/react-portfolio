import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { displayText: "Home", redirectTo: "/"},
  { displayText: "About", redirectTo: "/about"},
  { displayText: "Resume", redirectTo: "/resume"},
  { displayText: "Contact", redirectTo: "/contact"}
]

const Navbar = () => (
  <nav class="nav-bar">
    {links.map(link => (
      <NavLink 
        class="nav-link"
        activeClassName="active"
        exact={link.redirectTo === "/"}
        to={link.redirectTo}
      >
        {link.displayText}
      </NavLink>
    ))}
  </nav>
);

export default Navbar;
