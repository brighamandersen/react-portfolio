import { IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => (
  <div className="content contact-page">
    <h1>Contact Me</h1>
    <Tooltip title="Check out my GitHub" arrow>
      <IconButton
        href="https://github.com/brighamband/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" className="github-contact-pg" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Connect with me on LinkedIn" arrow>
      <IconButton
        href="https://www.linkedin.com/in/brighamband"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Email brighamband@gmail.com" arrow>
      <IconButton href="mailto:brighamband@gmail.com">
        <MailOutlineIcon fontSize="large" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Text / Call 385-499-8277" arrow>
      <IconButton href="tel:3854998277">
        <PhoneIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  </div>
);

export default Contact;
