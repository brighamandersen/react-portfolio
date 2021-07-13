import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { pages } = props;

  return (
  <nav class="nav-bar">
    {pages.map(page => (
      <NavLink 
        class="nav-link"
        activeClassName="active"
        exact={page.link === "/"}
        to={page.link}
      >
        {page.displayText}
      </NavLink>
    ))}
  </nav>
);}

export default Navbar;
