import { Grid, Container, makeStyles } from "@material-ui/core";
import { designShots } from "../data";
import SectionTop from "../components/SectionTop";

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
    <section id="designs">
      <Container maxWidth="md">
        <SectionTop title="My Designs" />
        <Grid container spacing={5}>
          {designShots.map((shot) => (
            <Grid key={shot} item xs={12} sm={6} md={4}>
              {/* <img
                src={shot}
                alt="App Screenshot"
                className={styles.screenshot}
              /> */}
              <img src="https://drive.google.com/uc?export=view&id=1lTKYN8zVHECJowssyt0BrK6UwglUCzlV" className={styles.screenshot} />
              {/* http://drive.google.com/uc?export=view&id=URLIDHere */}

            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Designs;
