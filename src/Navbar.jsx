import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const { pages } = props;

  return (
    <nav className="nav-bar">
      {pages?.map((page) => (
        <NavLink
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
