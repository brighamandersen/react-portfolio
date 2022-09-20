import PropTypes from "prop-types";
import { Box, Hidden, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { COLORS } from "./global";
import { Page } from "./assets/data";

const useLocalStyles = makeStyles((theme) => ({
  iconWrapper: {
    display: "inherit",
    alignSelf: "center",
  },
  textWrapper: {
    paddingLeft: theme.spacing(1),
  },
  navbar: {
    background: theme.palette.primary.main,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1,

    "& > a": {
      display: "inline-block",
      padding: theme.spacing(2),
      color: COLORS.whiteGray,
      textDecoration: "none",
      letterSpacing: 1,

      "&.active": {
        background: COLORS.whiteGray,
        color: theme.palette.primary.main,
        fontWeight: "bold",
      },

      "&:not(.active):hover": {
        background: theme.palette.primary.light,
      },
    },
  },
}));

interface Props {
  pages: Page[];
}

const Navbar = (props: Props) => {
  const local = useLocalStyles();
  const { pages } = props;

  return (
    <nav className={local.navbar}>
      {pages.map((page) => (
        <NavLink
          key={page.path}
          activeClassName={local.active}
          exact={page.path === "/"}
          to={page.path}
        >
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <div className={local.iconWrapper}>{page.icon}</div>
            <Hidden smDown>
              <div className={local.textWrapper}>{page.name}</div>
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
