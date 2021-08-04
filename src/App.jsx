import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import { Hidden, ThemeProvider } from "@material-ui/core";
import { theme, useGlobalStyles } from "./global";
import { pages } from "./assets/data";
import cornerLogo from "./assets/corner-logo.png";

const App = () => {
  const global = useGlobalStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar pages={pages} />
        <Switch>
          {pages.map((page) => (
            <Route
              key={page.name}
              exact={page.path === "/"}
              path={page.path}
              component={page.component}
            />
          ))}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      <Hidden mdDown>
        <img src={cornerLogo} alt="My Logo" className={global.cornerLogo} />
      </Hidden>
    </ThemeProvider>
  );
};

export default App;
