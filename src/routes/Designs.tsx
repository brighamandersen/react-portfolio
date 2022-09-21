import { Grid, Container, makeStyles } from "@material-ui/core";
import { PageTop } from "../global";
import { designShots } from "../assets/data";

const useLocalStyles: any = makeStyles(() => ({
  screenshot: {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
    objectFit: "cover",
    height: 180,
  },
}));

const Designs = () => {
  const local = useLocalStyles();

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
                className={local.screenshot}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Designs;
