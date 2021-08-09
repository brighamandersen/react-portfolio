import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { languages } from "../assets/data";
import resume from "../assets/resume.png";
import { BigTooltip, PageTop, useGlobalStyles } from "../global";

const useLocalStyles = makeStyles(() => ({
  resumeImg: {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
  languagesWrapper: {
    "& > div": {
      textAlign: "center",
    },
    "& i": {
      fontSize: 100,
    },
  },
}));

const Resume = () => {
  const global = useGlobalStyles();
  const local = useLocalStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Resume" />
        <img src={resume} alt="Resume" className={local.resumeImg} />
        <Box my={8}>
          <h2>My Top Languages</h2>
          <Grid container spacing={5} className={local.languagesWrapper}>
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
    </main>
  );
};

export default Resume;
