import { Grid, Container } from "@material-ui/core";
import { resources } from "../data";
import PageTop from "../components/PageTop";
import IconLink from "../components/IconLink";

function Contact() {
  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="Contact Me" />
        <Grid container spacing={3}>
          {resources.map((res) => (
            <Grid key={res.name} item xs={6} md={4}>
              <IconLink
                icon={res.icon}
                link={res.link}
                tooltipTitle={res.tooltipTitle}
                square
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Contact;
