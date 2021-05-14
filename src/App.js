import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import logo from './assets/ba-logo.png';

const App = () => (
  <>
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    <img
      alt="Personal Logo"
      class="footer-logo"
      src={logo}
    />
  </>
);

export default App;
