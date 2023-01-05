import { Box, Hidden, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Page } from "../data";
import { COLORS } from "../styles/theme";
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
  navItemContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
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
  pages: Page[]
}

const Navbar = (props: Props) => {
  const { pages } = props;
  const styles = useStyles();

  return (
    <nav className={styles.navbar}>
      {pages.map((page) => (
        <HashLink
          key={page.path}
          // exact={page.path === "/"}
          smooth
          to={page.path}
          // activeClassName="selected"
          // activeStyle={{ backgroundolor: 'red' }}
          // activeClassName="active"
        >
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <div className={styles.iconWrapper}>{page.icon}</div>
            <Hidden smDown>
              <div className={styles.textWrapper}>{page.name}</div>
            </Hidden>
          </Box>
        </HashLink>
      ))}
    </nav>
  );
};

export default Navbar;
