import { Card, Container } from "@material-ui/core";
import React from "react";

const About = () => (
  <Container maxWidth="md" className="content">
    <h1>About Me</h1>
    <div className="about-cards">
      <Card className="card">
        <h2>
          My Work Experience
          <em> (Companies I've Developed For)</em>
        </h2>
        <ol>
          <li>Pecos Solutions</li>
          <li>BYU Silver Fund</li>
          <li>Village Book Builders</li>
          <li>Wyzant Tutoring</li>
        </ol>
      </Card>
      <Card className="card">
        <h2>My Top Languages</h2>
        <ol>
          <li>JavaScript (esp. React)</li>
          <li>Python (esp. Django)</li>
          <li>HTML/CSS</li>
          <li>C/C++</li>
          <li>Java</li>
        </ol>
      </Card>
      <Card className="card">
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
      </Card>
    </div>
  </Container>
);

export default About;
