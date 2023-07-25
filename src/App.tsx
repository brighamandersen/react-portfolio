import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Hidden, makeStyles, ThemeProvider } from '@material-ui/core';
import { pages } from './data';
import cornerLogo from './assets/corner-logo.png';
import { theme } from './styles/theme';

const useStyles = makeStyles(() => ({
  cornerLogo: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: 120,
    height: 120
  }
}));

function App() {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar pages={pages} />
        <main>
          <Switch>
            {pages.map((page) => (
              <Route
                key={page.name}
                exact={page.path === '/'}
                path={page.path}
                component={page.component}
              />
            ))}
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </main>
      </Router>
      <Hidden mdDown>
        <img
          src={cornerLogo}
          alt='BA Logo'
          className={styles.cornerLogo}
          loading='lazy'
        />
      </Hidden>
    </ThemeProvider>
  );
}

export default App;
