import { IconButton, Grid, Container } from "@mui/material";
import { resources } from "../assets/data";
import { BigTooltip, PageTop, useGlobalStyles } from "../global";

const Contact = () => {
  const global = useGlobalStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="Contact Me" />
        <Grid container spacing={3}>
          {resources.map((res) => (
            <Grid key={res.name} item xs={6} md={3}>
              <BigTooltip title={res.tooltip}>
                <IconButton
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={global.noCorners}
                >
                  {res.icon}
                </IconButton>
              </BigTooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Contact;
