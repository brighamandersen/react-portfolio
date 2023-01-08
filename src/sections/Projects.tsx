import LaunchSharpIcon from '@material-ui/icons/LaunchSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box, Card, Container, makeStyles } from '@material-ui/core';
import { projects } from '../data';
import SectionTop from '../components/SectionTop';
import { COLORS } from '../styles/theme';
import IconLink from '../components/IconLink';

const useStyles = makeStyles((theme) => ({
  header: {
    color: COLORS.white
  },
  url: {
    color: COLORS.white,
    padding: theme.spacing(2)
  }
}));

function Projects() {
  const styles = useStyles();

  return (
    <section id='projects'>
      <Container maxWidth='md'>
        <SectionTop
          title='My Projects'
          iconLink={
            <IconLink
              icon={<GitHubIcon />}
              link='https://github.com/brighamband?tab=repositories'
              tooltipTitle='Check out all my GitHub repos'
            />
          }
        />
        {projects.map((proj) => (
          <Box component={Card} key={proj.id} p={4} my={4}>
            <h2>{proj.name}</h2>
            <p>{proj.description}</p>
            {proj.url && (
              <IconLink
                icon={<LaunchSharpIcon />}
                link={proj.url}
                tooltipTitle={
                  <>
                    <h3 className={styles.header}>Site:</h3>
                    <code className={styles.url}>{proj.url}</code>
                  </>
                }
              />
            )}
            {proj.srcCode && (
              <IconLink
                icon={<GitHubIcon />}
                link={proj.srcCode}
                tooltipTitle={
                  <>
                    <h3 className={styles.header}>Source Code:</h3>
                    <code className={styles.url}>{proj.srcCode}</code>
                  </>
                }
              />
            )}
          </Box>
        ))}
      </Container>
    </section>
  );
}

export default Projects;
