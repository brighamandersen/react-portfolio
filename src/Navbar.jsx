import React from "react";
import PropTypes from "prop-types";
import { Box, Hidden, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useLocalStyles = makeStyles((theme) => ({
  navIcon: {
    display: "inherit",
    alignSelf: "center",
  },
  navText: {
    paddingLeft: theme.spacing(1),
  },
}));

const Navbar = ({ pages }) => {
  const local = useLocalStyles();

  return (
    <nav className="navbar">
      {pages.map((page) => (
        <NavLink
          key={page.path}
          activeClassName="active"
          exact={page.path === "/"}
          to={page.path}
        >
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <i className={local.navIcon}>{page.icon}</i>
            <Hidden smDown>
              <div className={local.navText}>{page.name}</div>
            </Hidden>
          </Box>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
