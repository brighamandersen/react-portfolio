import { Box, Hidden, makeStyles } from "@material-ui/core";
import { Section } from "../data";
import { COLORS } from "../styles/theme";

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
  sections: Section[];
  activeSectionId: string;
}

const Navbar = (props: Props) => {
  const { sections, activeSectionId } = props;
  const styles = useStyles();

  return (
    <nav className={styles.navbar}>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSectionId === section.id ? 'active': ''}
        >
           <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <div className={styles.iconWrapper}>{section.icon}</div>
            <Hidden smDown>
              <div className={styles.textWrapper}>{section.name}</div>
            </Hidden>
          </Box>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
