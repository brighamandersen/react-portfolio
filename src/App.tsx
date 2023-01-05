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
import Home from "./routes/Home";
import Designs from "./routes/Designs";

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
      </Router>
      <Hidden mdDown>
        <img src={cornerLogo} alt="My Logo" className={styles.cornerLogo} />
      </Hidden>
    </ThemeProvider>
  )
};
      // <h1>test</h1>
      // {/* {pages.map((page) => page.component)} */}
      // <Home />
      // <Hidden mdDown>
      //   <img src={cornerLogo} alt="My Logo" className={styles.cornerLogo} />
      // </Hidden>

export default App;
