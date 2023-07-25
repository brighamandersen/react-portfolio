import { Grid, Container, makeStyles } from '@material-ui/core';
import { contactMethods } from '../data';
import PageTop from '../components/PageTop';
import IconLink from '../components/IconLink';

const useStyles = makeStyles(() => ({
  fullSize: {
    width: '100%',
    height: '100%'
  }
}));

function Contact() {
  const styles = useStyles();

  return (
    <section id='contact'>
      <Container maxWidth='md'>
        <PageTop pageTitle='Contact Me' />
        <Grid container spacing={3}>
          {contactMethods.map((method) => (
            <Grid key={method.name} item xs={6} md={4}>
              <IconLink
                icon={<method.icon className={styles.fullSize} />}
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
}

export default Contact;
