import { Box, Container, Grid, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { languages, RESUME_S3_URL } from "../assets/data";
import { BigTooltip, PageTop, useGlobalStyles } from "../global";

const useLocalStyles: any = makeStyles(() => ({
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
}));

const Resume = () => {
  const global = useGlobalStyles();
  const local = useLocalStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Resume" />
        <iframe src={RESUME_S3_URL} title="Resume - Brigham Andersen" className={local.resumePdf} />
        <Box my={8}>
          <h2>My Top Languages</h2>
          <Grid container spacing={5} className={local.languagesWrapper}>
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
                    className={global.noCorners}
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
