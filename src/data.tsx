import { ReactElement } from "react";
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Sites from "./sections/Sites";
import Designs from "./sections/Designs";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PermMediaIcon from '@material-ui/icons/PermMedia';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import DescriptionIcon from "@material-ui/icons/Description";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Projects from "./sections/Projects";

export const GDRIVE_BASE_URL = 'https://drive.google.com/uc?export=view&id=';

export interface Section {
  id: string;
  name: string;
  component: () => ReactElement;
  icon?: ReactElement;
}

/* List of sections of this portfolio website */
export const sections: Section[] = [
  {
    id: "home",
    name: "Home",
    component: Home,
    icon: <HomeIcon />,
  },
  // {
  //   id: "projects",
  //   name: "Projects",
  //   component: Projects,
  //   icon: <PermMediaIcon />,
  // },
  {
    id: "designs",
    name: "Designs",
    component: Designs,
    icon: <PhotoLibraryIcon />,
  },
  {
    id: "sites",
    name: "Sites",
    component: Sites,
    icon: <DesktopMacIcon />,
  },
  {
    id: "resume",
    name: "Resume",
    component: Resume,
    icon: <DescriptionIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    component: Contact,
    icon: <AccountBoxIcon />,
  },
];

// See folder where all the shots are stored at https://drive.google.com/drive/u/0/folders/1BxRgdhP44eLnhc9qHu5jnQMMjO7xTycD
// IDs below are the names of the repos and/or folders within GDrive where shots are stored.
// Make sure shots are square and .jpg (use lunapic)
interface Project {
  id: string;
  name: string;
  shots: string[];
}

export const projects: Project[] = [
  {
    id: "scoreboard",
    name: "Scoreboard",
    shots: [
      "1mdThtpI3CgnG_lThtMgD7IMqa8-00bwN",
      "1QBjixMatPrpRoh-7EPuM3EgZsBRPgi-B"
    ]
  },
  {
    id: "weather-rain-or-shine",
    name: "Weather Rain or Shine",
    shots: [
      "12QuzefsZsalrKgO6tqHT2wPk2MvCsrIa"
    ]
  },
  {
    id: "vbb-portal",
    name: "VBB Portal",
    shots: [
      "1PDDxatkJ8DzlmeU4XZpmx62-SMu9EN7C",
      "1GC9T77SHbnBEd9nt0YbyZnqbLs2tnFpH",
      "1uWnUIo9ek-LDrTsr-XVheqQBfoWYZLzu",
    ]
  },
  {
    id: "no-end-insight",
    name: "No End Insight",
    shots: [
      "1s6tmVvXH4G6r0rKSokrNlcMWOWFtSmnA",
      "1Cv8YJi7QCQgJlbMFcvlmCiUaAi1B8FRo",
      "1b4l943DIPBZ2bwxyRGmUumVEe9G9O8T8",
      "1JXesz7KJmnX6b10KT3PVfzzDxXkQulw7",
      "1bC9J0fw-941vySVyB-UBRxIfjVuWfhIk",
    ]
  },
  {
    id: "jokester",
    name: "Jokester",
    shots: [
      "10XALKJ0b2fcUIGw0zQAOqeHdWBUTRBeW",
      "1LoK5yempCvTTj-0p6B6jRoLt_bOc95rH"
    ]
  },
  {
    id: "nba-insider-hub",
    name: "NBA Insider Hub",
    shots: [
      "1NPF4qO_3M62CTJsfl1Oy2cnlG6e8emI7",
      "1wWywLcMmqeKWytKrNDJV7DXDkWtG_dBm"
    ]
  },
  {
    id: "photography",
    name: "Photography",
    shots: [
      "1pD792_OuSrGUsi56viqsBDd8iy-t7r1E",
      "1YDy-ZZQX5pf1U9z4Nvf_2iTfeGiJHa3H",
      "1ccFv-l_XiibaosZutb4L2FCG_66CFnti",
    ]
  },
  {
    id: "silver-fund",
    name: "Silver Fund",
    shots: [
      "18NswXD6eIRE82A8tE-oiL-xh4BaTK3od",
      "1FfWptIuq5pY_2U1PxYLcQOzCf48pCQbc",
      "1yFeaGoj2zfBWK6_jsOVT0tEzh_uha5y2",
      "1lpqp9UkLEsDw2MdP1FCS7-i0XVK4vjX4",
    ]
  },
  {
    id: "french-toast",
    name: "French Toast Instructions",
    shots: [
      "1Aktraxt-h1hgIaPfaQjzmkRFSNHy3I_2",
      "1qLSLnf7jkQH2Fgre-ZHguiXrWSFHGCDw"
    ]
  },
  {
    id: "melting-pot",
    name: "Melting Pot",
    shots: [
      "1FrEpbBTCNT3B-rLCuaqvLQUkckk1US38",
      "1izPI242cFzpTO78sl_B2lBdnSwCykCcx",
    ]
  },
  {
    id: "windsor",
    name: "Windsor Stake Resource Finder",
    shots: [
      "1L5O1LeHf2ebAKNjDkiUsY27fz7FPSKwb",
      "1lHKR1FdPwgmvdX7VjlI2etjXR_A_ySTi",
    ]
  },
  {
    id: "irecognize",
    name: "iRecognize",
    shots: [
      "1PBGEpqcwc2e9zt3rs8mosRmEbDAknp1-",
      "1WF9rIPR2Gz1tq_6v7yS_psxwOHbOhnvB",
      "15enpKv8WUAk59ubUWzwN45AAa2-xAU59",
      "1kijMjmBon5mzH2TdJdY7C1vwhemFiept",
      "1xJHRT-AdLeJkFWpGq9BxUJd09i1BTJ2q",
    ]
  },
  {
    id: "47fund",
    name: "Silver Fund Web App",
    shots: [
      "1N_L1TmviCyeXrjFAYvt0IiZVd9ktTDmi",
      "1SukV3DEh5m4q3ClbbKV6OCXLyBd_gNuu",
      "17NnAVb-ivpvooTH4PiTDJ4Hohp8WxqTK",
      "1qD7Q-3jzw9qadRe7dd7HB7XZs6nIUefU",
      "1EzG56uA6WYixaz55Q_og3z34fNi_fK39",
      "11sdhmIYMKwTMZWUiLdm9QcAXmf-cDhvw",
      "1GrlIyOHnGgX57XhFbzXriROZbYGRrPwq",
    ]
  },
  {
    id: "jolt",
    name: "Jolt",
    shots: [
      "1Z2GSGLxfHuRUg8RLBUl7safI7jiLSzmw",
    ]
  },
  {
    id: "pecos",
    name: "Pecos",
    shots: [
      "105s34RcgmIs1U2x7V3ZYbZimjg7zTM4j",
      "10F92CyWYUPTdChprtFojLAvJFktMxTzX",
      "10k1lcC0eu5qb4k9GHryYF27bvy1SnY24",
      "1XFvc1wnTRBa26IsDFEWMcFkewrcQomOi",
      "1mlohwIIWVOM3lamMwEkr7V1hPfumVIoW",
      "1Y20aI2L1EHLN5_gsVv5HDU6HNOofwsKo",
      "1X7jBovH19Y1ZKurIzG_HLY7nbrZteWnl",
    ]
  },
  {
    id: "tweeter",
    name: "Tweeter",
    shots: [
      "1PkToOOeNZLfLOfblnkq5AynCt5aADHmU",
      "1_3RjtdkkqY-G0uPDJXXaYi-qaOvnQdEF"
    ]
  },
  {
    id: "piano",
    name: "Piano",
    shots: [
      "1Q1BmYyRJki59u-P9HMFKcGvuSHfXperI",
    ]
  },
  {
    id: "snake",
    name: "Snake",
    shots: [
      "1bOT6qSmgu4m4eEXt9xW50IRryzhNXz1u",
    ]
  },
  {
    id: "tictactoe",
    name: "Tic Tac Toe",
    shots: [
      "1HaRz4JpAJ6LndbMtWgkNMrn8lW7WhMh0",
    ]
  },
  {
    id: "instructme",
    name: "Instruct.Me",
    shots: [
      "1SKPtyYAb7mtM31EfYoLDfD9qcArChTqM",
      "1AKlqTiEICjXrP_BSYMrPyu21Qum0GFlM",
      "11rRWGf3URPW3NCR9z4qO2oTywaD1nxNw"
    ]
  },
  {
    id: "hack-overflow",
    name: "Hack Overflow",
    shots: [
      "1LjeGt3TF9cGpNKgXoQx-YOR8XhkTEaNu",
      "15NeRXYhX9Y3PED8dgJRm_1olpbfmDwAp",
      "1-qFPFAxy0duDTrCxxYRKATsQgysEMrex",
      "1HxXhLYPy80dL2RPQgMg11ojUV6B147E-",
      "1qeCACh5qWuMc5n3bzAnwpgdeWLY477wf",
    ]
  },
  // {
  //   id: "",
  //   name: "",
  //   shots: [
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   id: "",
  //   name: "",
  //   shots: [
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   id: "",
  //   name: "",
  //   shots: [
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   id: "",
  //   name: "",
  //   shots: [
  //     "",
  //     ""
  //   ]
  // },
]

export const allShots = projects.flatMap(project => project.shots);

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
    category: ["side", "work"],
    description:
      "This website was made using React and styled using Material UI.  It was built with the purpose of helping prospective clients/employers get a feel for who I am and the work I do.",
  },
];

interface ContactMethod {
  name: string;
  icon: ReactElement;
  link: string;
  tooltipTitle?: string | ReactElement;
}

const fullSize = { width: "100%", height: "100%" };
/* List of external resources for contacting me */
export const contactMethods: ContactMethod[] = [
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

const GH_SEARCH_BASE_URL = "https://github.com/brighamband?tab=repositories&q=";
/* My top languages - used on '/#resume' */
export const languages = [
  {
    name: "JavaScript",
    className: "devicon-javascript-plain colored",
    searchUrl: `${GH_SEARCH_BASE_URL}javascript`,
  },
  {
    name: "React",
    className: "devicon-react-original-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}react`,
  },
  {
    name: "Vue",
    className: "devicon-vuejs-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}vue`,
  },
  {
    name: "Flutter",
    className: "devicon-flutter-plain colored",
    searchUrl: `${GH_SEARCH_BASE_URL}&language=dart`,
  },
  {
    name: "HTML",
    className: "devicon-html5-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}html`,
  },
  {
    name: "CSS",
    className: "devicon-css3-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}css`,
  },
  {
    name: "Python",
    className: "devicon-python-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}python`,
  },
  {
    name: "Java",
    className: "devicon-java-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}java`,
  },
  {
    name: "Android",
    className: "devicon-android-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}android`,
  },
  {
    name: "C++",
    className: "devicon-cplusplus-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}c-plus-plus`,
  },
  {
    name: "C",
    className: "devicon-c-plain-wordmark colored",
    searchUrl: `${GH_SEARCH_BASE_URL}&language=c`,
  },
];

/* List of my latest youtube videos with embed links - used on Home section */
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

const RESUME_GDRIVE_ID = "1mS0MkDu1NzWzgNQKYNY3-bClSzIREIvI"
export const RESUME_GDRIVE_URL = `${GDRIVE_BASE_URL}${RESUME_GDRIVE_ID}#view=fit`;
// "view=fit" makes one page fit perfectly within the height of the iframe
// "&toolbar=0" removes the toolbar so they can't download the pdf as easily (no download bar)