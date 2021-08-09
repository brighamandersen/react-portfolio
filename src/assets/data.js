import Contact from "../routes/Contact";
import Home from "../routes/Home";
import Resume from "../routes/Resume";
import Sites from "../routes/Sites";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import LanguageIcon from "@material-ui/icons/Language";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Designs from "../routes/Designs";

/* List of pages on this portfolio website */
export const pages = [
  {
    name: "Home",
    component: Home,
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Designs",
    component: Designs,
    path: "/designs",
    icon: <LanguageIcon />,   // FIXME - Replace with designs/screenshots icon
  },
  {
    name: "Sites",
    component: Sites,
    path: "/sites",
    icon: <LanguageIcon />,
  },
  {
    name: "Resume",
    component: Resume,
    path: "/resume",
    icon: <DescriptionIcon />,
  },
  {
    name: "Contact",
    component: Contact,
    path: "/contact",
    icon: <AccountBoxIcon />,
  },
];

/* List of the websites I've made */
export const sites = [
  {
    name: "Ponderizer",
    url: "https://ponderizer.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "Full-stack scripture memorization app - make an account, then save and ponderize your favorite scripture verses! Created with VueJS, Node, Express, and MongoDB.  ",
    srcCode: "https://github.com/brighamband/ponderizer",
  },
  {
    name: "Pecos Solutions",
    url: "https://pecos-solutions.com",
    screenshot: null,
    category: ["work"],
    description:
      "My latest commercial website.  A full-stack web app used to preview and download records/documents by county.  Features user authentication, custom theming, an Admin Dashboard, and dynamic routing.  Back-end is AWS, front-end is React, using Styled Components and Material UI for styling.",
    srcCode: "https://github.com/Pecos-Solutions/pecos",
  },
  {
    name: "NBA Insider Hub",
    url: "https://bball.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "4 words: Basketball Player Search Index.  Front-end client which connects the balldontlie API, allowing users to see a table of NBA Teams, then search by player name to see latest player stats. Uses Vanilla JavaScript, HTML, and Bootstrap CSS.",
    srcCode: "https://github.com/brighamband/nba-insider-hub",
  },
  {
    name: "Jokester",
    url: "https://jokester.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "A website which displays random coding and dad jokes, then allows you to save your favorites so you can view them later.  Uses Vanilla JavaScript, HTML, and Bulma CSS (decided I'd try a different CS framework on this one).",
    srcCode: "https://github.com/brighamband/jokester",
  },
  {
    name: "Scoreboard",
    url: "https://scoreboard.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "Birthday present for my dad (he loves sports and stats, so he naturally loves scorekeeping).  I've made many sites in React, but this was my first website made using Material UI for styling.",
    srcCode: "https://github.com/brighamband/scoreboard",
  },
  {
    name: "Simple Counter",
    url: "https://brighamband.github.io/simple-counter",
    screenshot: null,
    category: "side",
    description:
      "Ever run out of fingers while counting?  Use this app to keep tally! Simple Counter was one of my first React apps back when I was first learning about React Hooks.",
    srcCode: "https://github.com/brighamband/simple-counter",
  },
  {
    name: "Simple Calculator",
    url: "https://brighamband.github.io/simple-calculator",
    screenshot: null,
    category: "side",
    description:
      "Simple reactive calculator that takes to inputs and returns the result on the fly after performing basic arithmetic ( + - * / ).  Made with React.",
    srcCode: "https://github.com/brighamband/simple-calculator",
  },
  {
    name: "Weather Rain or Shine",
    url: "https://weather.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "A weather app that lets you search by city, then interacts with an API to display current weather conditions, 5-day, and 3-hour forecasts.  Uses Vanilla JavaScript, HTML, and Bootstrap CSS.",
    srcCode: "https://github.com/brighamband/weather-rain-or-shine",
  },
  {
    name: "K9 Directory",
    url: "https://brighamband.github.io/k9-directory",
    screenshot: null,
    category: "side",
    description:
      "Consider yourself a dog-lover?  Here's a simple React app made in CodeSandbox which interfaces with an API to show random dog pictures based on the breed you select.",
    srcCode: "https://github.com/brighamband/k9-directory",
  },
  {
    name: "Snake",
    url: "https://snake.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "A blast from the past, this retro snake game will give you some serious nostalgia.  Made using Vanilla JavaScript, HTML, and Standard CSS.",
    srcCode: "https://github.com/brighamband/snake",
  },
  {
    name: "Piano",
    url: "https://piano.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "On the go but dying to pound some horse teeth?  Here's this online mini piano (1 octave) created using Vanilla JavaScript, HTML, and Standard CSS.",
    srcCode: "https://github.com/brighamband/piano",
  },
  {
    name: "Tic Tac Toe",
    url: "https://tictactoe.brighamband.com",
    screenshot: null,
    category: "side",
    description:
      "Don't have a pen and paper but one play some good 'ole Tic Tac Toe?  Here you go!  This website was made using Vanilla JavaScript, HTML, and Standard CSS.",
    srcCode: "https://github.com/brighamband/tictactoe",
  },
  {
    name: "Photography",
    url: "https://photography.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "Have an exciting event coming up and want to make sure you capture those memories?  Here's an photographer informational site where you look into hiring a photographer.  Created using HTML and Bootstrap CSS.",
    srcCode: "https://github.com/brighamband/photography",
  },
  {
    name: "Material Todo",
    url: "https://brighamband.github.io/material-todo",
    screenshot: null,
    category: ["side", "work", "beta"],
    description:
      "For a job interview I made this basic todo list showing my skills in Material UI and React.  This was back when I was less experienced and I was on a time crunch so it still needs advanced functionality (needs to add todos, remove them, and save them for future reference.",
    srcCode: "https://github.com/brighamband/material-todo",
  },
  {
    name: "Silver Fund Visitor Site",
    url: "https://silverfund.byu.edu",
    screenshot: null,
    category: "work",
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
      "An online social media platform for sharing uplifting insights!  Still under development, only the front-end (HTML and Bootstrap CSS) was completed for school.  Now I'm working on hooking it up to a back-end for fun!",
    srcCode: "https://github.com/brighamband/no-end-insight",
  },
  {
    name: "Comics Browser",
    url: "https://comics.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "Online comics browser.  Look through comics, then leave ratings and comments.  Made possible with an API for comic data, then created with VueJS.",
    srcCode: "https://github.com/brighamband/comics",
  },
  {
    name: "Mother Earth Groceries",
    url: "https://groceries.brighamband.com",
    screenshot: null,
    category: "school",
    description:
      "Sick of going in-person to the store just to see their selection?  This site showcases a grocery store and their unique product offering, allowing users to search for specific items, then add desired ones to their cart.  Made using VueJS.",
    srcCode: "https://github.com/brighamband/groceries",
  },

  {
    name: "Say Hello Greeter",
    url: "https://codepen.io/brighamband/pen/qBrxPgg",
    screenshot: null,
    category: "side",
    description:
      "A simple app which greets a user based on the name they enter.  I was learning Android and picked this basic project, but decided to first implement it using Vanilla JavaScript to compare and contrast the two.",
    srcCode: "https://codepen.io/brighamband/pen/qBrxPgg",
  },
  {
    name: "Portfolio (This Website)",
    url: "https://brighamband.com",
    screenshot: null,
    category: ["side", "work", "beta"],
    description:
      "This website was made using React and styled using Material UI.  It was built with the purpose of helping prospective clients/employers get a feel for who I am and the work I do.",
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

const baseSearchUrl = "https://github.com/brighamband?tab=repositories&q=";
/* My top languages - used on '/resume' */
export const languages = [
  {
    name: "JavaScript",
    className: "devicon-javascript-plain colored",
    searchUrl: `${baseSearchUrl}javascript`,
  },
  {
    name: "React",
    className: "devicon-react-original-wordmark colored",
    searchUrl: `${baseSearchUrl}react`,
  },
  {
    name: "Vue",
    className: "devicon-vuejs-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}vue`,
  },
  {
    name: "HTML",
    className: "devicon-html5-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}html`,
  },
  {
    name: "CSS",
    className: "devicon-css3-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}css`,
  },
  {
    name: "Python",
    className: "devicon-python-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}python`,
  },
  {
    name: "Java",
    className: "devicon-java-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}java`,
  },
  {
    name: "Android",
    className: "devicon-android-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}android`,
  },
  {
    name: "C++",
    className: "devicon-cplusplus-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}c-plus-plus`,
  },
  // {
  //   name: "C",
  //   className: "devicon-c-plain-wordmark colored",
  // searchUrl: `${baseSearchUrl}c`,
  // },
];
