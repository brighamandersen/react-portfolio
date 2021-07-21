import { IconButton, Tooltip, makeStyles } from "@material-ui/core";
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
    width: 400,
    height: 400,
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
    <div className="content contact-page">
      <h1>Contact Me</h1>

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
          <GitHubIcon fontSize="large" className={classes.icon} />
        </IconButton>
      </Tooltip>
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
      <Tooltip
        title={<TooltipTitle title={"Text / Call 385-499-8277"} />}
        classes={{ tooltip: classes.longTooltip }}
        arrow
      >
        <IconButton href="tel:3854998277" className={classes.iconButton}>
          <PhoneIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Contact;
