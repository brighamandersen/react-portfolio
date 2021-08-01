import { Container } from "@material-ui/core";
import React from "react";
import resumePng from "./assets/resume.png";

const Resume = () => (
  <div className="content resume-page">
    <h1>Resume</h1>
    {/* <Container maxWidth="sm"> */}
    <img src={resumePng} alt="Resume" className="resume" />

    {/* </Container> */}
  </div>
);

export default Resume;
