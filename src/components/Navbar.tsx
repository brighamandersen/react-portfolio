import { Box, Hidden, makeStyles } from "@material-ui/core";
import { Page, pathToHash } from "../data";
import { COLORS } from "../styles/theme";
import { HashLink as Link } from 'react-router-hash-link';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from "react";

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
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      {pages.map((page) => (
        <Link
          key={page.hash}
          smooth
          to={page.hash || '#'} // Handle redirect back home (normally an empty string)
          className={location.hash === page.hash ? 'active': ''}
        >
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <div className={styles.iconWrapper}>{page.icon}</div>
            <Hidden smDown>
              <div className={styles.textWrapper}>{page.name}</div>
            </Hidden>
          </Box>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
