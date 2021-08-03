import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { pages } from "./assets/data";

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
