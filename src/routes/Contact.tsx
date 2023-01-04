import { IconButton, Grid, Container, makeStyles } from "@material-ui/core";
import { resources } from "../data";
import PageTop from "../components/PageTop";
import BigTooltip from "../components/BigTooltip";

function Contact() {
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
