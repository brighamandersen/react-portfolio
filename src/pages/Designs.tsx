import { Grid, Container, makeStyles } from '@material-ui/core';
import { allShots } from '../data';
import PageTop from '../components/PageTop';

const useStyles = makeStyles(() => ({
  shot: {
    width: '100%',
    maxHeight: 300,
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
  }
}));

function Designs() {
  const styles = useStyles();

  return (
    <section id='designs'>
      <Container maxWidth='md'>
        <PageTop pageTitle='My Designs' />
        <Grid container spacing={3}>
          {allShots.map((shot) => (
            <Grid key={shot} item xs={6} md={4}>
              <img
                src={shot!} // Not null
                alt={`${shot} Screenshot`}
                className={styles.shot}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Designs;
