import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hidden, makeStyles, ThemeProvider } from "@material-ui/core";
import { pages } from "./data";
import cornerLogo from "./assets/corner-logo.png";
import { theme } from "./styles/theme";

const useStyles = makeStyles(() => ({
  cornerLogo: {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: 120,
    height: 120,
  },
}));

function App() {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar pages={pages} />
        {pages.map(page => page.component)}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Router>
      <Hidden mdDown>
        <img src={cornerLogo} alt="My Logo" className={styles.cornerLogo} />
      </Hidden>
    </ThemeProvider>
  )
};

export default App;
