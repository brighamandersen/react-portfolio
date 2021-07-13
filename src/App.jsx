import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Resume from "./Resume";

const pages = [
  {component: <Home />, displayText: "Home", link: "/"},
  {component: <About />, displayText: "About", link: "/about"},
  {component: <Resume />, displayText: "Resume", link: "/resume"},
  {component: <Contact />, displayText: "Contact", link: "/contact"},
]

const App = () => (
  <>
    <Router>
    <Navbar pages={pages} />
      <Switch>
        {pages.map(page => (
          <Route exact={page.link === "/"} path={page.link}>
            {page.component}
          </Route>
        ))}
        <Route path="*">
           <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
