import { Grid, Container, makeStyles } from "@material-ui/core";
import { designShots } from "../data";
import PageTop from "../components/PageTop";

const useStyles = makeStyles(() => ({
  screenshot: {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    objectFit: "cover",
    height: 180,
  },
}));

function Designs() {
  const styles = useStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Designs" />
        <Grid container spacing={5}>
          {designShots.map((shot) => (
            <Grid key={shot} item xs={12} sm={6} md={4}>
              <img
                src={shot}
                alt="App Screenshot"
                className={styles.screenshot}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Designs;
