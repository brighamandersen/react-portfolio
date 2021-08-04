import React from "react";
import PropTypes from "prop-types";
import { Box, Hidden } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = ({ pages }) => (
  <nav className="navbar">
    {pages.map((page) => (
      <NavLink
        key={page.path}
        className="nav-link"
        activeClassName="active"
        exact={page.path === "/"}
        to={page.path}
      >
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
          <div className="flex-child navlink-icon">{page.icon}</div>
          <Hidden smDown>
            <div className="flex-child navlink-text">{page.name}</div>
          </Hidden>
        </Box>
      </NavLink>
    ))}
  </nav>
);

export default Navbar;

Navbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
