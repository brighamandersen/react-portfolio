import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { languages } from '../data';
import PageTop from '../components/PageTop';
import IconLink from '../components/IconLink';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() => ({
  resumePdf: {
    height: '75vh',
    width: '100%',
    border: 'none'
  },
  languagesWrapper: {
    '& > div': {
      textAlign: 'center'
    },
    '& i': {
      fontSize: 100
    }
  },
  noCorners: {
    borderRadius: 0
  }
}));

import resumePdf from '../assets/Resume - Brigham Andersen.pdf';
function Resume() {
  const styles = useStyles();

  const resumePdfWithViewFit = `${resumePdf}#view=fit`;

  return (
    <section id='resume'>
      <Container maxWidth='md'>
        <PageTop
          pageTitle='My Resume'
          iconLink={
            <IconLink
              icon={<LinkedInIcon />}
              link='https://www.linkedin.com/in/brighamandersen/details/experience/'
              tooltipTitle='See all job experience on LinkedIn'
            />
          }
        />
        <iframe
          src={resumePdfWithViewFit}
          loading='lazy'
          title='Resume - Brigham Andersen'
          className={styles.resumePdf}
        />
        <Box my={8}>
          <h2>My Top Languages</h2>
          <Grid container spacing={5} className={styles.languagesWrapper}>
            {languages.map((lang) => (
              <Grid key={lang.name} item xs={6} sm={4} md={3}>
                <IconLink
                  icon={<i className={lang.className} />}
                  link={lang.searchUrl}
                  tooltipTitle={
                    lang.searchUrl
                      ? `Check out my ${lang.name} repos on GitHub`
                      : lang.name
                  }
                  square
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default Resume;
