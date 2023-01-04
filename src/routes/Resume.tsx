import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { languages, RESUME_S3_URL } from "../data";
import PageTop from "../components/PageTop";
import BigTooltip from "../components/BigTooltip";

const useStyles = makeStyles(() => ({
  resumePdf: {
    height: "80vh",
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
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Resume" />
        <iframe src={RESUME_S3_URL} title="Resume - Brigham Andersen" className={styles.resumePdf} />
        <Box my={8}>
          <h2>My Top Languages</h2>
          <Grid container spacing={5} className={styles.languagesWrapper}>
            {languages.map((lang) => (
              <Grid key={lang.name} item xs={6} sm={4}>
                <BigTooltip
                  title={
                    lang.searchUrl
                      ? `Check out my ${lang.name} repos on GitHub`
                      : lang.name
                  }
                >
                  <IconButton
                    href={lang.searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.noCorners}
                  >
                    <i className={lang.className} />
                  </IconButton>
                </BigTooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </main>
  );
};

export default Resume;
