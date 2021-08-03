import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { pages } = props;

  return (
    <nav className="navbar">
      {pages.map((page) => (
        <NavLink
          key={page.link}
          className="nav-link"
          activeClassName="active"
          exact={page.link === "/"}
          to={page.link}
        >
          {page.icon}
          {page.displayText}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
