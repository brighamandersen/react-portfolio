import { Container } from "@material-ui/core";
import React from "react";
import resume from "../assets/resume.png";

const Resume = () => (
  <Container maxWidth="md" className="content">
    <h1>Resume</h1>
    <img src={resume} alt="Resume" className="resume" />
  </Container>
);

export default Resume;
