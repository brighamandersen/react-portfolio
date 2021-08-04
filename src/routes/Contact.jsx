import React from "react";
import { IconButton, makeStyles, Grid, Container } from "@material-ui/core";
import { resources } from "../assets/data";
import { BigTooltip, documentTitleTail } from "../global";
import { Helmet } from "react-helmet";

const useStyles = makeStyles(() => ({
  iconButton: {
    borderRadius: 0,
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="content">
      <Helmet>
        <title>{`Contact Me${documentTitleTail}`}</title>
      </Helmet>
      <h1>Contact Me</h1>
      <Grid container spacing={3}>
        {resources.map((res) => (
          <Grid key={res.name} item xs={6} md={3}>
            <BigTooltip title={res.tooltip}>
              <IconButton
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.iconButton}
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
