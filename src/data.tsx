import { ReactElement } from "react";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
import Sites from "./routes/Sites";
import Designs from "./routes/Designs";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import scoreboardShot from "./assets/designs/scoreboard.png";
import jokesterShot from "./assets/designs/jokester.png";
import jokesterPopupShot from "./assets/designs/jokester-popup.png";
import vbbBookingShot from "./assets/designs/BookingDesktop.png";
import neiFeedShot from "./assets/designs/feed-desktop.jpeg";
import sfFundObjectivesShot from "./assets/designs/FundObjectives1.4.png";
import photographyHomeShot from "./assets/designs/home-desktop.jpeg";
import neiLoginShot from "./assets/designs/nei-login-desktop.jpeg";
import nbaInsiderHubShot from "./assets/designs/nba-ih-desktop.jpeg";
import sfPositionsHistoryShot from "./assets/designs/PositionsHistoryPercent.png";
import sfPositionsSnapshotShot from "./assets/designs/PositionsSnapshot$.png";
import vbbUnbookingShot from "./assets/designs/UnbookingDesktop.png";
import vbbSigninMobileShot from "./assets/designs/VBBSigninMobile.png";
import adminDashboardAllUsersShot from "./assets/designs/admin-dashboard-all-users.jpeg";
import adminDashboardCreateUserShot from "./assets/designs/admin-dashboard-create-user.jpeg";
import adminDashboardEditUserShot from "./assets/designs/admin-dashboard-edit-user.jpeg";
import adminDashboardFilterUsersShot from "./assets/designs/admin-dashboard-filter-users.jpeg";
import advancedSearchShot from "./assets/designs/AdvancedSearch.png";
import clerkDashboardShot from "./assets/designs/clerk-dashboard.jpeg";
import contactShot from "./assets/designs/contact.jpeg";
import vbbDashboardShot from "./assets/designs/DashboardDesktopWithSessions.png";
import documentManagementShot from "./assets/designs/document-management.jpeg";
import sfHomeShot from "./assets/designs/Home1.5-HistorySlider.png";
import landingShot from "./assets/designs/landing.jpeg";
import pecosLoginShot from "./assets/designs/pecos-login-desktop.jpeg";
import notFoundShot from "./assets/designs/not-found.png";
import sfHistoryShot from "./assets/designs/OurHistory1.4.png";
import quickSearchShot from "./assets/designs/QuickSearch.png";
import recordsTableShot from "./assets/designs/records-table.png";
import recordsShot from "./assets/designs/records.png";
import registerShot from "./assets/designs/register.png";
import frenchToast1Shot from "./assets/designs/FrenchToastProcessPaper-1.png";
import frenchToast2Shot from "./assets/designs/FrenchToastProcessPaper-2.png";
import joltLabelsPortrait from "./assets/designs/Jolt Labels - Tablet Portrait.png";
import joltLabelsLandscape from "./assets/designs/Jolt Labels - Tablet Landscape.png";

export interface Page {
  name: string;
  component: () => ReactElement;
  path: string;
  icon?: ReactElement;
}

/* List of pages on this portfolio website */
export const pages: Page[] = [
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
    icon: <PhotoLibraryIcon />,
  },
  {
    name: "Sites",
    component: Sites,
    path: "/sites",
    icon: <DesktopMacIcon />,
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

/* List of screenshots of designs I've made */
export const designShots = [
  scoreboardShot,
  jokesterShot,
  jokesterPopupShot,
  vbbBookingShot,
  neiFeedShot,
  sfFundObjectivesShot,
  photographyHomeShot,
  neiLoginShot,
  nbaInsiderHubShot,
  sfPositionsHistoryShot,
  sfPositionsSnapshotShot,
  vbbUnbookingShot,
  vbbSigninMobileShot,
  adminDashboardAllUsersShot,
  adminDashboardCreateUserShot,
  adminDashboardEditUserShot,
  adminDashboardFilterUsersShot,
  advancedSearchShot,
  clerkDashboardShot,
  contactShot,
  vbbDashboardShot,
  documentManagementShot,
  sfHomeShot,
  landingShot,
  pecosLoginShot,
  notFoundShot,
  sfHistoryShot,
  quickSearchShot,
  recordsTableShot,
  recordsShot,
  registerShot,
  frenchToast1Shot,
  frenchToast2Shot,
  joltLabelsPortrait,
  joltLabelsLandscape
];

interface Site {
  name: string;
  url: string | null;
  srcCode: string | null;
  category: string[];
  description: string;
}

/* List of the websites I've made */
export const sites: Site[] = [
  {
    name: "Command Shake",
    url: null,
    srcCode: "https://github.com/brighamband/commandshake",
    category: ["side"],
    description:
      "A script that automatically applies to jobs for me.  Web scrapes the BYU Handshake website when you search for any job and applies to all the jobs with quick apply.  Written in Python.",
  },
  {
    name: "Pecos Solutions",
    url: "https://pecos-solutions.com",
    srcCode: "https://github.com/Pecos-Solutions/pecos",
    category: ["work"],
    description:
    "My latest commercial website.  A full-stack web app used to preview and download records/documents by county.  Features user authentication, custom theming, an Admin Dashboard, and dynamic routing.  Back-end is AWS, front-end is React, using Styled Components and Material UI for styling.",
  },
  {
    name: "Silver Fund Web App",
    url: "https://47fund.brighamband.com",
    srcCode: "https://github.com/brighamband/47fund",
    category: ["work", "side"],
    description:
    "Silver Fund Web App - A Stocks/Trades Performance Tracker/Predictor Site.  I created this while working as a Software Engineer for Silver Fund (BYU's MBA Finance Program) during the second half of 2020.  After I left the project broke, so I recreated the front end side of things on my domain as a side project.",
  },
  {
    name: "VBB Mentoring Portal",
    url: "https://vbb.brighamband.com",
    srcCode: "https://github.com/brighamband/vbb-portal",
    category: ["work", "side"],
    description:
      "International Mentoring Booking Site used by Nike and Oracle.  I did full stack development on this project, but focused primarily on front end.  This project has been unstable since I left, so in the cases that the Official Website (https://portal.villagebookbuilders.org) is down or people want to take a look at site features w/o making an account, I recreated the front end side of things on my domain as a side project.",
  },
  {
    name: "On The Line",
    url: "https://ontheline.brighamband.com",
    srcCode: "https://github.com/brighamband/on-the-line",
    category: ["side"],
    description:
      "A scorekeeper game built specifically around the basketball mini game \"9 On the Line\". I made this in React after getting frustrated of keeping track of game scores on my own.",
  },
  {
    name: "Ponderizer",
    url: "https://ponderizer.brighamband.com",
    srcCode: "https://github.com/brighamband/ponderizer",
    category: ["school"],
    description:
      "Full-stack scripture memorization app - make an account, then save and ponderize your favorite scripture verses! Created with VueJS, Node, Express, and MongoDB.  ",
  },
  {
    name: "NBA Insider Hub",
    url: "https://nba.brighamband.com",
    srcCode: "https://github.com/brighamband/nba-insider-hub",
    category: ["school"],
    description:
      "4 words: Basketball Player Search Index.  Front-end client which connects the balldontlie API, allowing users to see a table of NBA Teams, then search by player name to see latest player stats. Uses Vanilla JavaScript, HTML, and Bootstrap CSS.",
  },
  {
    name: "Jokester",
    url: "https://jokester.brighamband.com",
    srcCode: "https://github.com/brighamband/jokester",
    category: ["side"],
    description:
      "A website which displays random coding and dad jokes, then allows you to save your favorites so you can view them later.  Uses Vanilla JavaScript, HTML, and Bulma CSS (decided I'd try a different CS framework on this one).",
  },
  {
    name: "Scoreboard",
    url: "https://scoreboard.brighamband.com",
    srcCode: "https://github.com/brighamband/scoreboard",
    category: ["side"],
    description:
      "Birthday present for my dad (he loves sports and stats, so he naturally loves scorekeeping).  I've made many sites in React, but this was my first website made using Material UI for styling.",
  },
  {
    name: "Svelter",
    url: "https://svelter.brighamband.com",
    srcCode: "https://github.com/brighamband/svelter",
    category: ["side"],
    description:
      "A simple website I made using Svelte Kit which showcases basic features of Svelte.",
  },
  {
    name: "Simple Counter",
    url: "https://counter.brighamband.com",
    srcCode: "https://github.com/brighamband/simple-counter",
    category: ["side"],
    description:
      "Ever run out of fingers while counting?  Use this app to keep tally! Simple Counter was one of my first React apps back when I was first learning about React Hooks.",
  },
  {
    name: "Simple Calculator",
    url: "https://calculator.brighamband.com",
    srcCode: "https://github.com/brighamband/simple-calculator",
    category: ["side"],
    description:
      "Simple reactive calculator that takes to inputs and returns the result on the fly after performing basic arithmetic ( + - * / ).  Made with React.",
  },
  {
    name: "Weather Rain or Shine",
    url: "https://weather.brighamband.com",
    srcCode: "https://github.com/brighamband/weather-rain-or-shine",
    category: ["school"],
    description:
      "A weather app that lets you search by city, then interacts with an API to display current weather conditions, 5-day, and 3-hour forecasts.  Uses Vanilla JavaScript, HTML, and Bootstrap CSS.",
  },
  {
    name: "K9 Directory",
    url: "https://k9.brighamband.com",
    srcCode: "https://github.com/brighamband/k9-directory",
    category: ["side"],
    description:
      "Consider yourself a dog-lover?  Here's a simple React app made in CodeSandbox which interfaces with an API to show random dog pictures based on the breed you select.",
  },
  {
    name: "Snake",
    url: "https://snake.brighamband.com",
    srcCode: "https://github.com/brighamband/snake",
    category: ["side"],
    description:
      "A blast from the past, this retro snake game will give you some serious nostalgia.  Made using Vanilla JavaScript, HTML, and Standard CSS.",
  },
  {
    name: "Piano",
    url: "https://piano.brighamband.com",
    srcCode: "https://github.com/brighamband/piano",
    category: ["side"],
    description:
      "On the go but dying to pound some horse teeth?  Here's this online mini piano (1 octave) created using Vanilla JavaScript, HTML, and Standard CSS.",
  },
  {
    name: "Tic Tac Toe",
    url: "https://tictactoe.brighamband.com",
    srcCode: "https://github.com/brighamband/tictactoe",
    category: ["side"],
    description:
      "Don't have a pen and paper but one play some good 'ole Tic Tac Toe?  Here you go!  This website was made using Vanilla JavaScript, HTML, and Standard CSS.",
  },
  {
    name: "Photography",
    url: "https://photography.brighamband.com",
    srcCode: "https://github.com/brighamband/photography",
    category: ["school"],
    description:
      "Have an exciting event coming up and want to make sure you capture those memories?  Here's an photographer informational site where you look into hiring a photographer.  Created using HTML and Bootstrap CSS.",
  },
  {
    name: "Material Todo",
    url: "https://mui-todo.brighamband.com",
    srcCode: "https://github.com/brighamband/mui-todo",
    category: ["side", "work", "beta"],
    description:
      "For a job interview I made this basic todo list showing my skills in Material UI and React.  This was back when I was less experienced and I was on a time crunch so it still needs advanced functionality (needs to add todos, remove them, and save them for future reference.",
  },
  {
    name: "Silver Fund Visitor Site",
    url: "https://silverfund.byu.edu",
    srcCode: null,
    category: ["work"],
    description:
      "My first no-code website, used making WordPress.  The head of our organization was looking to create an informational page for visitors and wanted to be able to go in later and make adjustments himself, so we opted to make the site in WordPress.",
  },
  {
    name: "Timekeeper",
    url: "https://timekeeper.brighamband.com",
    srcCode: "https://github.com/brighamband/timekeeper",
    category: ["side", "beta"],
    description: "A modern redesign of online-stopwatch.com.  Makes it easy to keep a countdown or stopwatch going in the background of your browser.",
  },
  {
    name: "No End Insight",
    url: "https://insight.brighamband.com",
    srcCode: "https://github.com/brighamband/no-end-insight",
    category: ["school", "side", "beta"],
    description:
      "An online social media platform for sharing uplifting insights!  Still under development, only the front-end (HTML and Bootstrap CSS) was completed for school.  Now I'm working on hooking it up to a back-end for fun!",
  },
  {
    name: "Comics Browser",
    url: "https://comics.brighamband.com",
    srcCode: "https://github.com/brighamband/comics",
    category: ["school"],
    description:
      "Online comics browser.  Look through comics, then leave ratings and comments.  Made possible with an API for comic data, then created with VueJS.",
  },
  {
    name: "Mother Earth Groceries",
    url: "https://groceries.brighamband.com",
    srcCode: "https://github.com/brighamband/groceries",
    category: ["school"],
    description:
      "Sick of going in-person to the store just to see their selection?  This site showcases a grocery store and their unique product offering, allowing users to search for specific items, then add desired ones to their cart.  Made using VueJS.",
  },
  {
    name: "Photo Bomb",
    url: null,
    srcCode: "https://github.com/brighamband/photobomb",
    category: ["school"],
    description:
      "Photos uploader, sharer, and viewer.  Now deprecated since previous hosting subscription expired.",
  },
  {
    name: "Museum of Ordinary Objects",
    url: null,
    srcCode: "https://github.com/brighamband/museum",
    category: ["school"],
    description:
      "Random picture uploader/viewer that introduced me to MongoDB.  Now deprecated since previous hosting subscription expired.",
  },
  {
    name: "Say Hello Greeter",
    url: "https://codepen.io/brighamband/pen/qBrxPgg",
    srcCode: "https://codepen.io/brighamband/pen/qBrxPgg",
    category: ["side"],
    description:
      "A simple app which greets a user based on the name they enter.  I was learning Android and picked this basic project, but decided to first implement it using Vanilla JavaScript to compare and contrast the two.",
  },
  {
    name: "Portfolio (This Website)",
    url: "https://brighamband.com",
    srcCode: "https://github.com/brighamband/portfolio",
    category: ["side", "work", "beta"],
    description:
      "This website was made using React and styled using Material UI.  It was built with the purpose of helping prospective clients/employers get a feel for who I am and the work I do.",
  },
];

const fullSize = { width: "100%", height: "100%" };

/* List of external resources for contacting / discovering more about me */
export const resources = [
  {
    name: "LinkedIn",
    icon: <LinkedInIcon style={fullSize} />,
    link: "https://www.linkedin.com/in/brighamband",
    tooltipTitle: "Connect with me on LinkedIn",
  },
  {
    name: "Email",
    icon: <MailOutlineIcon style={fullSize} />,
    link: "mailto:brighamband@gmail.com",
    tooltipTitle: "Email brighamband@gmail.com",
  },
  {
    name: "Phone",
    icon: <PhoneIcon style={fullSize} />,
    link: "tel:3854998277",
    tooltipTitle: "Text / Call 385-499-8277",
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
    name: "Flutter",
    className: "devicon-flutter-plain colored",
    searchUrl: `${baseSearchUrl}&language=dart`,
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
  {
    name: "C",
    className: "devicon-c-plain-wordmark colored",
    searchUrl: `${baseSearchUrl}&language=c`,
  },
];

/* List of my latest youtube videos with embed links - used on Home page */
export const latestVidContent = [
  {
    title: "Commandshake Bot - Automated Job Applying",
    url: "https://www.youtube.com/embed/34GiNbJ4ECc",
  },
  {
    title: "Ep3 - How to Use Components in Figma",
    url: "https://www.youtube.com/embed/McgMi2Pf4l4",
  },
  {
    title: "Ep2 - How to Use Groups in Figma",
    url: "https://www.youtube.com/embed/LjgIJtvU-nE",
  },
  {
    title: "Ep1 - How to Use Frames in Figma",
    url: "https://www.youtube.com/embed/oixLZtf-ct8",
  },
  {
    title: "Web Dev (JavaScript) Crash Course 2.0",
    url: "https://www.youtube.com/embed/UJC2Gyaxd_s",
  },
  {
    title: "Web Dev (HTML/CSS) Crash Course 1.0",
    url: "https://www.youtube.com/embed/vGIRW00pB9w",
  },
  {
    title: "Web Dev Snapshot",
    url: "https://www.youtube.com/embed/jSeLgZsF5_U",
  },
];

export const RESUME_S3_URL = "https://brig-bucket.s3.us-east-2.amazonaws.com/Resume - Brigham Andersen.pdf#view=fit";

// Use the URL below instead if you want to disable the download bar
// export const RESUME_S3_URL = "https://brig-bucket.s3.us-east-2.amazonaws.com/Resume - Brigham Andersen.pdf#view=fit&toolbar=0";
// "view=fit" makes one page fit perfectly within the height of the iframe
// "toolbar=0" removes the toolbar so they can't download the pdf as easily