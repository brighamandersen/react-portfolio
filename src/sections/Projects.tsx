import { Grid, Container, makeStyles } from "@material-ui/core";
import { projects } from "../data";
import SectionTop from "../components/SectionTop";
import { getGDriveUrl } from "../utils/helpers";

const useStyles = makeStyles(() => ({
  shot: {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)"
  },
}));

function Projects() {
  const styles = useStyles();

  return (
    <main id="projects">
      <Container maxWidth="md">
        <SectionTop title="My Projects" />
        <Grid container spacing={5}>
          {projects.map((proj) => (
            <div key={proj.id}>
              <h2>{proj.name}</h2>
              {proj.shots.map((shotId) => (
                <Grid item xs={12} sm={6} md={4}>
                  <img
                    src={getGDriveUrl(shotId)}
                    alt={`${shotId} Screenshot`}
                    className={styles.shot}
                  />
                </Grid>
              ))}
            </div>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Projects;
