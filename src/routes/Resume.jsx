import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { languages } from "../assets/data";
import resume from "../assets/resume.png";
import { BigTooltip, useGlobalStyles } from "../global";

const Resume = () => {
  const global = useGlobalStyles();

  return (
    <Container maxWidth="md" className="content">
      <h1>Resume</h1>
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
