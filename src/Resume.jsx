import React from "react";
import resumePng from "./assets/resume.png";

const Resume = () => (
  <div className="content resume-page">
    <h1>Resume</h1>
    <img src={resumePng} alt="Resume" className="resume" />
  </div>
);

export default Resume;
