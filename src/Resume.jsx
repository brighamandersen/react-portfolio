import React from "react";
import resumePng from "./assets/resume.png";

const Resume = () => (
  <div class="content resume-page">
    <h1>Resume</h1>
    <img src={resumePng} alt="Resume" class="resume" />
  </div>
);

export default Resume;
