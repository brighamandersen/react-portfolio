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
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import { resources } from "./assets/data";

const useStyles = makeStyles(() => ({
  iconButton: {
    borderRadius: 0,
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
        {resources.map((res) => (
          <Grid key={res.name} item xs={6} md={3}>
            <Tooltip
              title={<TooltipTitle title={res.tooltip} />}
              classes={{ tooltip: classes.longTooltip }}
              arrow
            >
              <IconButton
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconButton}
              >
                {res.icon}
              </IconButton>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;
