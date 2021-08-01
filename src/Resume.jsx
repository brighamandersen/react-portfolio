import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import resumePng from "./assets/resume.png";

const useStyles = makeStyles(() => ({
  resume: {
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    width: "100%",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div className="content resume-page">
      <h1>Resume</h1>
      <Container maxWidth="sm">
        <img src={resumePng} alt="Resume" className={classes.resume} />
      </Container>
    </div>
  );
};

export default Resume;
