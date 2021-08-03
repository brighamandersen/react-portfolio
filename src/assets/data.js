import React from "react";
import About from "../About";
import Contact from "../Contact";
import Home from "../Home";
import Resume from "../Resume";
import Sites from "../Sites";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

/* List of pages on this portfolio website */
export const pages = [
  { component: <Home />, displayText: "Home", link: "/" },
  { component: <Sites />, displayText: "Sites", link: "/sites" },
  { component: <About />, displayText: "About", link: "/about" },
  { component: <Resume />, displayText: "Resume", link: "/resume" },
  { component: <Contact />, displayText: "Contact", link: "/contact" },
];

export default pages;

/* List of the websites I've made */
export const sites = [
  {
    name: "Ponderizer",
    url: "https://ponderizer.brighamband.com",
    screenshot: null,
    category: "school",
    description: "",
    srcCode: "https://github.com/brighamband/ponderizer",
  },
  {
    name: "NBA Insider Hub",
    url: "https://bball.brighamband.com",
    screenshot: null,
    category: "school",
    tags: ["api"],
    description: "",
    srcCode: "https://github.com/brighamband/nba-insider-hub",
  },
  {
    name: "Jokester",
    url: "https://jokester.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "A website which displays random coding and dad jokes, then allows you to save your favorites so you can view them later",
    srcCode: "https://github.com/brighamband/jokester",
  },
  {
    name: "Scoreboard",
    url: "https://scoreboard.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "Birthday present for my dad (he loves sports and stats, so he naturally loves scorekeeping)",
    srcCode: "https://github.com/brighamband/scoreboard",
  },
  {
    name: "Simple Counter",
    url: "https://brighamband.github.io/simple-counter",
    screenshot: null,
    category: "side",
    description: "",
    srcCode: "https://github.com/brighamband/simple-counter",
  },
  {
    name: "Simple Calculator",
    url: "https://brighamband.github.io/simple-calculator",
    screenshot: null,
    category: "side",
    description: "",
    srcCode: "https://github.com/brighamband/simple-calculator",
  },
  {
    name: "Weather Rain or Shine",
    url: "https://weather.brighamband.com",
    screenshot: null,
    category: "school",
    tags: ["api"],
    description:
      "A weather app that lets you search by city, then interacts with an API to display current weather conditions, 5-day, and 3-hour forecasts",
    srcCode: "https://github.com/brighamband/weather-rain-or-shine",
  },
  {
    name: "K9 Directory",
    url: "https://brighamband.github.io/k9-directory",
    screenshot: null,
    category: "side",
    tags: ["api"],
    description: "",
    srcCode: "https://github.com/brighamband/k9-directory",
  },
  {
    name: "Snake",
    url: "https://snake.brighamband.com",
    screenshot: null,
    category: "side",
    description: "",
    srcCode: "https://github.com/brighamband/snake",
  },
  {
    name: "Piano",
    url: "https://piano.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "Online mini piano (1 octave) created using vanilla JavaScript",
    srcCode: "https://github.com/brighamband/piano",
  },
  {
    name: "Tic Tac Toe",
    url: "https://tictactoe.brighamband.com",
    screenshot: null,
    category: "side",
    description: "",
    srcCode: "https://github.com/brighamband/tictactoe",
  },
  {
    name: "Photography",
    url: "https://photography.brighamband.com",
    screenshot: null,
    category: "school",
    description: "",
    srcCode: "https://github.com/brighamband/photography",
  },
  {
    name: "Material Todo",
    url: "https://brighamband.github.io/material-todo",
    screenshot: null,
    category: ["side", "work", "beta"],
    description:
      "Still missing a lot of functionality.  For a job interview I made this showing my skills in Material UI and React, now I need to hook up a back-end or at least add add/delete functionality.",
    srcCode: "https://github.com/brighamband/material-todo",
  },
  {
    name: "Silver Fund Visitor Site",
    url: "https://silverfund.byu.edu",
    screenshot: null,
    category: "work",
    tags: ["wordpress"],
    description:
      "My first no-code website, used making WordPress.  The head of our organization was looking to create an informational page for visitors and wanted to be able to go in later and make adjustments himself, so we opted to make the site in WordPress.",
    srcCode: null,
  },
  {
    name: "No End Insight",
    url: "https://nei.brighamband.com",
    screenshot: null,
    category: ["school", "side", "beta"],
    description:
      "Still under development, only the front-end was completed for school.  Now I'm working on hooking it up to a back-end for fun!",
    srcCode: "https://github.com/brighamband/no-end-insight",
  },
  {
    name: "Comics Browser",
    url: "https://comics.brighamband.com",
    screenshot: null,
    category: "school",
    description: "",
    srcCode: "https://github.com/brighamband/comics",
  },
  {
    name: "Mother Earth Groceries",
    url: "https://groceries.brighamband.com",
    screenshot: null,
    category: "school",
    tags: ["vue", "css"],
    description: "",
    srcCode: "https://github.com/brighamband/groceries",
  },

  {
    name: "Say Hello Greeter",
    url: "https://codepen.io/brighamband/pen/qBrxPgg",
    screenshot: null,
    category: "side",
    tags: ["html", "css", "js"],
    description:
      "I was learning Android, and before I made this greeter there, I made it using javascript to compare and contrast the two.",
    srcCode: "https://codepen.io/brighamband/pen/qBrxPgg",
  },
  {
    name: "Pecos Solutions",
    url: "https://pecos-solutions.com",
    screenshot: null,
    category: ["work"],
    tags: ["react", "mui", "aws"],
    description:
      "A web app used to preview and download records/documents by county",
    srcCode: "https://github.com/Pecos-Solutions/pecos",
  },
  {
    name: "Portfolio (This Website!)",
    url: "https://brighamband.com",
    screenshot: null,
    category: ["side", "work", "beta"],
    description: "",
    srcCode: "https://github.com/brighamband/portfolio",
  },
];

// SITES TO ADD EVENTUALLY
// {
//     name: 'Museum of Ordinary Objects',
//     url: 'https://museum.brighamband.com',
//     category: 'school',
//     description: '',
//     srcCode: '',
// },
// {
//     name: 'Photo Bomb',
//     url: 'https://photobomb.brighamband.com/',
//     category: 'side',
//     description: 'Photos uploader, sharer, and viewer',
//     srcCode: 'https://github.com/brighamband/photobomb',
// },
// {
//     name: 'Silver Fund Web App',
//     url: 'https://47fund.byu.edu',
//     category: 'work',
//     description: 'Stocks/Trades Performance Predictor/Calculator Site',
//     srcCode: 'https://github.com/brighamband/photobomb',
// },
// {
//     name: 'VBB Mentoring Portal',
//     url: 'https://portal.villagebookbuilders.org',
//     category: 'work',
//     description: 'International Mentoring Booking Site',
//     srcCode: 'https://github.com/brighamband/photobomb',
// },

const fullSize = { width: "100%", height: "100%" };

/* List of external resources for contacting / discovering more about me */
export const resources = [
  {
    name: "Github",
    tooltip: "Check out my GitHub",
    link: "https://github.com/brighamband/",
    icon: <GitHubIcon style={fullSize} />,
  },
  {
    name: "LinkedIn",
    tooltip: "Connect with me on LinkedIn",
    link: "https://www.linkedin.com/in/brighamband",
    icon: <LinkedInIcon style={fullSize} />,
  },
  {
    name: "Email",
    tooltip: "Email brighamband@gmail.com",
    link: "mailto:brighamband@gmail.com",
    icon: <MailOutlineIcon style={fullSize} />,
  },
  {
    name: "Phone",
    tooltip: "Text / Call 385-499-8277",
    link: "tel:3854998277",
    icon: <PhoneIcon style={fullSize} />,
  },
];
