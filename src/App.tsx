import Navbar from './components/Navbar';
import { Hidden, makeStyles, ThemeProvider } from '@material-ui/core';
import { sections } from './data';
import cornerLogo from './assets/corner-logo.png';
import { theme } from './styles/theme';
import { useEffect, useState } from 'react';

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
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id);

  useEffect(() => {
    // Check if the page was loaded directly with a URL
    const loadedWithUrl = window.performance.getEntriesByType('navigation')[0].type === 'navigate';

    // Disable smooth scrolling initially if loaded with a URL
    if (loadedWithUrl) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    // Enable smooth scrolling when the user interacts with the page
    const enableSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
      document.removeEventListener('wheel', enableSmoothScrolling);
      document.removeEventListener('touchstart', enableSmoothScrolling);
    };

    // Listen for user interactions to enable smooth scrolling
    document.addEventListener('wheel', enableSmoothScrolling);
    document.addEventListener('touchstart', enableSmoothScrolling);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.addEventListener('wheel', enableSmoothScrolling);
      document.addEventListener('touchstart', enableSmoothScrolling);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      // Become active section once there's 100px or less before the section top hits the top of the page
      if (window.pageYOffset >= sectionTop - 100) {
        currentSectionId = section.getAttribute('id') as string;
      }
    });
    setActiveSectionId(currentSectionId);
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar sections={sections} activeSectionId={activeSectionId} />
      <main>
        {sections.map((section) => (
          <section.component key={section.id} />
        ))}
      </main>
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
