import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import Resume from "./Resume";
import Sites from "./Sites";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const pages = [
  { component: <Home />, displayText: "Home", link: "/" },
  { component: <Sites />, displayText: "Sites", link: "/sites" },
  { component: <About />, displayText: "About", link: "/about" },
  { component: <Resume />, displayText: "Resume", link: "/resume" },
  { component: <Contact />, displayText: "Contact", link: "/contact" },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Navbar pages={pages} />
      <Switch>
        {pages.map((page) => (
          <Route key={page.link} exact={page.link === "/"} path={page.link}>
            {page.component}
          </Route>
        ))}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
