import React from "react";
import PropTypes from "prop-types";
import { IconButton, Grid, Container } from "@material-ui/core";
import { resources } from "../assets/data";
import { BigTooltip, PageTop, useGlobalStyles } from "../global";

const Contact = ({ title }) => {
  const global = useGlobalStyles();

  return (
    <Container maxWidth="md" className="content">
      <PageTop pageTitle={title} />
      <Grid container spacing={3}>
        {resources.map((res) => (
          <Grid key={res.name} item xs={6} md={3}>
            <BigTooltip title={res.tooltip}>
              <IconButton
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className={global.noCorners}
              >
                {res.icon}
              </IconButton>
            </BigTooltip>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;

Contact.propTypes = {
  title: PropTypes.string.isRequired,
};
