import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav class="nav-bar">
    <NavLink class="nav-link" activeClassName="active" exact to="/">
      Home
    </NavLink>
    <NavLink class="nav-link" activeClassName="active" to="/about">
      About
    </NavLink>
    <NavLink class="nav-link" activeClassName="active" to="/contact">
      Contact
    </NavLink>
  </nav>
);

export default Navbar;
