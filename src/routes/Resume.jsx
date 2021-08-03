import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { languages } from "../assets/data";
import resume from "../assets/resume.png";

const Resume = () => (
  <Container maxWidth="md" className="content">
    <h1>Resume</h1>
    <img src={resume} alt="Resume" className="resume" />
    <Box my={8}>
      <h2>My Top Languages</h2>
      <Grid container spacing={3} className="languages-container">
        {languages.map((lang) => (
          <Grid key={lang.name} item xs={6} sm={4}>
            <i className={lang.className} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Resume;
