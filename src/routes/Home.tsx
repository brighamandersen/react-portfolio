import {
  Box,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import profilePic from "../assets/profile.jpg";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { latestVidContent } from "../data";
import PageTop from "../components/PageTop";
import WebVideo from "../components/WebVideo";
import IconLink from "../components/IconLink";

const useStyles = makeStyles(() => ({
  profileImg: {
    width: "100%",
    borderRadius: "50%",
  },
}));

export function Home() {
  const styles = useStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="Welcome!" />
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            <p>
              Hi, I'm <strong>Brigham Andersen</strong> and <u>I'm addicted to giving my all</u>.
            </p>
            <p>
              I love solving the problem we hate most --
              <i> wasting time and money</i>.
            </p>
            <p>
            I can't stop thinking of how we can use technology to boost business productivity, so I've built a career for myself in software engineering and business. 
            My passion and skills have helped numerous start-ups along with big name companies like Nike, Oracle, Chick-fil-A, McDonald's, and Walmart. 
            I consider this career to be my gift to the world.
            </p>
            <p>Let's discuss how I can give my all to help you!</p>
          </Grid>
          <Grid item xs={8} md={4}>
            <img src={profilePic} alt="Me" className={styles.profileImg} />
          </Grid>
        </Grid>
        <Box my={8}>
          <Box display="flex" alignItems="center">
            <h2>Latest Content</h2>
            <Box ml={2}>
              <IconLink 
                icon={<YouTubeIcon />}
                link="https://www.youtube.com/channel/UC5h98VfEfhqHkSMlt4ejCeg"
                tooltipTitle="Check out my YouTube channel"
              />
            </Box>
          </Box>
          {latestVidContent.map((vid) => (
            <WebVideo key={vid.url} title={vid.title} url={vid.url} />
          ))}
        </Box>
      </Container>
    </main>
  );
};

export default Home;
