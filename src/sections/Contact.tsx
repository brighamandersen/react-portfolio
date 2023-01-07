import { Grid, Container } from "@material-ui/core";
import { contactMethods } from "../data";
import SectionTop from "../components/SectionTop";
import IconLink from "../components/IconLink";

function Contact() {
  return (
    <section id="contact">
      <Container maxWidth="md">
        <SectionTop title="Contact Me" />
        <Grid container spacing={3}>
          {contactMethods.map((method) => (
            <Grid key={method.name} item xs={6} md={4}>
              <IconLink
                icon={method.icon}
                link={method.link}
                tooltipTitle={method.tooltipTitle}
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
