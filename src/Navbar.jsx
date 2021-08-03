import { Box, Hidden } from "@material-ui/core";
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
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <div className="flex-child navlink-icon">{page.icon}</div>
            <Hidden smDown>
              <div className="flex-child navlink-text">{page.displayText}</div>
            </Hidden>
          </Box>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
