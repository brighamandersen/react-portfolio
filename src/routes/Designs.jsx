import React from "react";
import {  Grid, Container, makeStyles } from "@material-ui/core";
import { PageTop, /*useGlobalStyles*/ } from "../global";
import registerShot from '../assets/designs/register.png';
import recordsShot from '../assets/designs/records.png';
import notFoundShot from '../assets/designs/not-found.png';

const useLocalStyles = makeStyles((theme) => ({
  screenshot: {
    width: '100%',
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  }
}));

const Designs = () => {
  // const global = useGlobalStyles();
  const local = useLocalStyles();

  return (
    <main>
      <Container maxWidth="lg" className="content">
        <PageTop pageTitle="My Design Screenshots" />
        <Grid container spacing={3}>
            <Grid item xs={6} md={4}>
              <img src={registerShot} alt="App Screenshot" className={local.screenshot} />
            </Grid>
            <Grid item xs={6} md={4}>
              <img src={recordsShot} alt="App Screenshot" className={local.screenshot} />
            </Grid>
            <Grid item xs={6} md={4}>
              <img src={notFoundShot} alt="App Screenshot" className={local.screenshot} />
            </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Designs;
