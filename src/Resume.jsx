import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import resume from "./assets/resume.png";

const useStyles = makeStyles(() => ({
  resume: {
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    width: "100%",
  },
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className="content">
      <h1>Resume</h1>
      <img src={resume} alt="Resume" className={classes.resume} />
    </Container>
  );
};

export default Resume;
