import {
  Box,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { languages, RESUME_GDRIVE_URL } from "../data";
import PageTop from "../components/PageTop";
import IconLink from "../components/IconLink";

const useStyles = makeStyles(() => ({
  resumePdf: {
    height: "75vh",
    width: "100%",
    border: 'none'
  },
  languagesWrapper: {
    "& > div": {
      textAlign: "center",
    },
    "& i": {
      fontSize: 100,
    },
  },
  noCorners: {
    borderRadius: 0
  }
}));

function Resume() {
  const styles = useStyles();

  return (
    <main id="resume">
      <Container maxWidth="md">
        <PageTop pageTitle="My Resume" />
        <iframe src={RESUME_GDRIVE_URL} title="Resume - Brigham Andersen" className={styles.resumePdf} />
        <Box my={8}>
          <h2>My Top Languages</h2>
          <Grid container spacing={5} className={styles.languagesWrapper}>
            {languages.map((lang) => (
              <Grid key={lang.name} item xs={6} sm={4}>
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
    </main>
  );
};

export default Resume;
