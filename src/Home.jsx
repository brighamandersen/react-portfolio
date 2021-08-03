import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import profile from "./assets/profile-square.jpg";

const Home = () => (
  <Container maxWidth="md" className="content">
    <Typography variant="h3">Home</Typography>
    <Grid container spacing={5} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <p>
          Hi, my name is <strong>Brigham Andersen</strong>. I'm a student at
          Brigham Young University getting a Bachelor's of Science in Computer
          Science: Software Engineering and minoring in Business.
        </p>
        <p>
          I love solving the problem we hate most --
          <i> wasting time and money</i>. This passion drives my career,
          centered on using technology to boost business productivity.
        </p>
        <p>
          I'm addicted to giving my all and am looking forward to combining that
          passion with my skills in software engineering and business to help
          you!
        </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <img className="profile" src={profile} alt="Me" />
      </Grid>
    </Grid>
  </Container>
);

export default Home;
