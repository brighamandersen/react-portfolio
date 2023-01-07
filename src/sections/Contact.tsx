import { Grid, Container } from "@material-ui/core";
import { resources } from "../data";
import SectionTop from "../components/SectionTop";
import IconLink from "../components/IconLink";

function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="md">
        <SectionTop title="Contact Me" />
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
    </section>
  );
};

export default Contact;
