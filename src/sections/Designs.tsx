import { Grid, Container, makeStyles } from "@material-ui/core";
import { allShots } from "../data";
import SectionTop from "../components/SectionTop";
import { getGDriveUrl } from "../utils/helpers";

const useStyles = makeStyles(() => ({
  shot: {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  },
}));

function Designs() {
  const styles = useStyles();

  return (
    <section id="designs">
      <Container maxWidth="md">
        <SectionTop title="My Designs" />
        <Grid container spacing={5}>
          {allShots.map((shotId) => (
            <Grid key={shotId} item xs={12} sm={6} md={4}>
              <img
                src={getGDriveUrl(shotId)}
                alt={`${shotId} Screenshot`}
                className={styles.shot}
                loading="lazy"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Designs;
