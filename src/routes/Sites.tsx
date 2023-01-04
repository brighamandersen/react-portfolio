import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Card, Container, IconButton, makeStyles } from "@material-ui/core";
import { sites } from "../data";
import PageTop from "../components/PageTop";
import BigTooltip from "../components/BigTooltip";
import { COLORS } from "../styles/theme";

const useStyles = makeStyles((theme) => ({
  header: {
    color: COLORS.white,
  },
  url: {
    color: COLORS.white,
    padding: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    margin: theme.spacing(4),
  },
}));

function Sites() {
  const styles = useStyles();

  return (
    <main>
      <Container maxWidth="md">
        <PageTop pageTitle="My Websites & Projects" />
        {sites.map((site) => (
          <Card key={site.name} className={styles.card}>
            <h2>{site.name}</h2>
            <p>{site.description}</p>
            {site.url && (
              <BigTooltip
                title={
                  <>
                    <h3 className={styles.header}>Site:</h3>
                    <code className={styles.url}>{site.url}</code>
                  </>
                }
              >
                <IconButton
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LaunchSharpIcon />
                </IconButton>
              </BigTooltip>
            )}
            {site.srcCode && (
              <BigTooltip
                title={
                  <>
                    <h3 className={styles.header}>Source Code:</h3>
                    <code className={styles.url}>{site.srcCode}</code>
                  </>
                }
              >
                <IconButton
                  href={site.srcCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </BigTooltip>
            )}
          </Card>
        ))}
      </Container>
    </main>
  );
};

export default Sites;
