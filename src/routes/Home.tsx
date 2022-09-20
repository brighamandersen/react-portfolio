import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import profile from "../assets/profile.jpg";
import { BigTooltip, PageTop, WebVideo } from "../global";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { latestVidContent } from "../assets/data";

const useLocalStyles = makeStyles(() => ({
  profileImg: {
    width: "100%",
    borderRadius: "50%",
  },
}));

const Home = () => {
  const local = useLocalStyles();

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
            My passion and skills have helped numerous start-ups along with big name companies like Nike, Oracle, Chick-fil-A, and McDonald's. 
            I consider this career to be my gift to the world.
            </p>
            <p>Let's discuss how I can give my all to help you!</p>
          </Grid>
          <Grid item xs={8} md={4}>
            <img src={profile} alt="Me" className={local.profileImg} />
          </Grid>
        </Grid>
        <Box my={8}>
          <h2>
            Latest Content{" "}
            <BigTooltip title="Check out my YouTube channel">
              <IconButton
                href="https://www.youtube.com/channel/UC5h98VfEfhqHkSMlt4ejCeg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>
            </BigTooltip>
          </h2>
          {latestVidContent.map((vid) => (
            <WebVideo key={vid.url} title={vid.title} url={vid.url} />
          ))}
        </Box>
      </Container>
    </main>
  );
};

export default Home;
