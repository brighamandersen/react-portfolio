import React from "react";
import { Box, Container, Grid, IconButton } from "@material-ui/core";
import { languages } from "../assets/data";
import resume from "../assets/resume.png";
import { BigTooltip, PageTop, useGlobalStyles } from "../global";

const Resume = () => {
  const global = useGlobalStyles();

  return (
    <Container maxWidth="md" className="content">
      <PageTop pageTitle="My Resume" />
      <img src={resume} alt="Resume" className="resume" />
      <Box my={8}>
        <h2>My Top Languages</h2>
        <Grid container spacing={5} className="languages-container">
          {languages.map((lang) => (
            <Grid key={lang.name} item xs={6} sm={4}>
              <BigTooltip
                title={
                  lang.searchUrl
                    ? `Check out my ${lang.name} repos on GitHub`
                    : lang.name
                }
              >
                <IconButton
                  href={lang.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={global.noCorners}
                >
                  <i className={lang.className} />
                </IconButton>
              </BigTooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Resume;
