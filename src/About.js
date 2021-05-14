import React from "react";

const About = () => (
  <div class="content about-page">
    <h1>About Me</h1>
    <div class="about-cards">
      <div class="about-card">
        <h2>
          My Work Experience
          <em>(Companies Where I've Done Web Development)</em>
        </h2>
        <ol>
          <li>Pecos Solutions</li>
          <li>BYU Silver Fund</li>
          <li>Village Book Builders</li>
        </ol>
      </div>
      <div class="about-card">
        <h2>My Top Languages</h2>
        <ol>
          <li>JavaScript (esp. React)</li>
          <li>Python (esp. Django)</li>
          <li>HTML/CSS</li>
          <li>C/C++</li>
          <li>Java</li>
        </ol>
      </div>
      <div class="about-card">
        <h2>My Top Projects</h2>
        <ul>
          <li>County Record Search,Preview, and Download Site</li>
          <li>Stocks/Trades Performance Predictor/Calculator Site</li>
          <li>International Mentoring Booking Site</li>
          <li>All-in-one Language Lexer, Parser, Interpreter, and Evaluator</li>
          <li>Insights-Sharing Social Media Site</li>
          <li>Dynamic Arithmetic Calculator Site</li>
          <li>Modernized Todo-List Site</li>
        </ul>
      </div>
      <div className="about-card">
        <iframe width="100%" height="100%" title="Web Dev Snapshot" 
        src="https://www.youtube.com/embed/jSeLgZsF5_U" allowFullScreen />
      </div>
    </div>

    <h4>
      See <a href="https://github.com/brighamband/">my GitHub</a> for more info!
    </h4>
  </div>
);

export default About;
