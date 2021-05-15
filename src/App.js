import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";

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
  </>
);

export default App;
