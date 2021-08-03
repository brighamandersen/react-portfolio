import React from "react";

const About = () => (
  <div className="content about-page">
    <h1>About Me</h1>
    <div className="about-cards">
      <div className="card about-card">
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
      <div className="card about-card">
        <h2>My Top Languages</h2>
        <ol>
          <li>JavaScript (esp. React)</li>
          <li>Python (esp. Django)</li>
          <li>HTML/CSS</li>
          <li>C/C++</li>
          <li>Java</li>
        </ol>
      </div>
      <div className="card about-card">
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
      <div className="card about-card">
        <h2>Personal Websites</h2>
        <ol>
          <li>brighamband.com (yep, this site was hand-crafted using React)</li>
          <li>
            bball.brighamband.com (NBA Insider Hub -- Basketball Player Search
            Index)
          </li>
          <li>
            weather.brighamband.com (Weather Rain or Shine -- shows weather
            forecasts by city
          </li>
          <li>
            photography.brighamband.com (Photographer Informational Site --
            Created using HTML and CSS
          </li>
          <li>
            nei.brighamband.com (No End Insight Site -- Created using HTML and
            CSS, online social media platform for sharing uplifting insights
          </li>
          <li>
            https://brighamband.github.io/simple-calculator/ -- Simple reactive
            calculator that takes to inputs and returns the output after doing
            addition, subtraction, multiplication, or subtraction
          </li>
          <li>
            https://brighamband-simplecounter.netlify.app/ -- Simple Counter App
          </li>
          <li>
            ponderizer.brighamband.com -- Full stack scripture memorization app
            -- Uses VueJS, Node, Express, and MongoDB
          </li>
          <li>tictactoe.brighamband.com -- Tic Tac Toe Game</li>
          <li>snake.brighamband.com -- Snake Game</li>
          <li>piano.brighamband.com -- Online Mini Piano</li>
          <li>comics.brighamband.com -- XKCD Comics Browser</li>
          <li>store.brighamband.com -- Mother Earth Store</li>
          <li>museum.brighamband.com -- Museum of Ordinary Objects</li>
          <li>photobomb.brighamband.com -- Photo Bomb Picture Gallery</li>
        </ol>
      </div>
      <div className="card about-card">
        <h2>Work Websites</h2>
        <ol>
          <li>
            47fund.byu.edu -- Silver Fund Web App (Stocks/Trades Performance
            Predictor/Calculator Site)
          </li>
          <li>silverfund.byu.edu -- Silver Fund Informational Site</li>
          <li>
            pecos-solutions.com -- County Record Search,Preview, and Download
            Site
          </li>
          <li>
            portal.villagebookbuilders.org -- International Mentoring Booking
            Site
          </li>
        </ol>
      </div>
      <div className="card">
        <iframe
          width="100%"
          height="100%"
          title="Web Dev Snapshot"
          src="https://www.youtube.com/embed/jSeLgZsF5_U"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default About;
