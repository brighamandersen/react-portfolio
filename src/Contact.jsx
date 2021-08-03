import {
  IconButton,
  Tooltip,
  makeStyles,
  Grid,
  Container,
} from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles(() => ({
  iconButton: {
    borderRadius: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  longTooltip: {
    maxWidth: "none",
  },
  tooltipText: {
    color: "white",
  },
}));

const Contact = () => {
  const classes = useStyles();

  const TooltipTitle = ({ title }) => (
    <>
      <h1 className={classes.tooltipText}>{title}</h1>
    </>
  );

  return (
    <Container maxWidth="md" className="content">
      <h1>Contact Me</h1>

      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <Tooltip
            title={<TooltipTitle title={"Check out my GitHub"} />}
            classes={{ tooltip: classes.longTooltip }}
            arrow
          >
            <IconButton
              href="https://github.com/brighamband/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.iconButton}
            >
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6} md={3}>
          <Tooltip
            title={<TooltipTitle title={"Connect with me on LinkedIn"} />}
            classes={{ tooltip: classes.longTooltip }}
            arrow
          >
            <IconButton
              href="https://www.linkedin.com/in/brighamband"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.iconButton}
            >
              <LinkedInIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6} md={3}>
          <Tooltip
            title={<TooltipTitle title={"Email brighamband@gmail.com"} />}
            classes={{ tooltip: classes.longTooltip }}
            arrow
          >
            <IconButton
              href="mailto:brighamband@gmail.com"
              className={classes.iconButton}
            >
              <MailOutlineIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs={6} md={3}>
          <Tooltip
            title={<TooltipTitle title={"Text / Call 385-499-8277"} />}
            classes={{ tooltip: classes.longTooltip }}
            arrow
          >
            <IconButton href="tel:3854998277" className={classes.iconButton}>
              <PhoneIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
