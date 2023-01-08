import { Box, Card, makeStyles } from '@material-ui/core';
import LaunchSharpIcon from '@material-ui/icons/LaunchSharp';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Project } from '../data';
import { COLORS } from '../styles/theme';
import IconLink from './IconLink';

const useStyles = makeStyles((theme) => ({
  header: {
    color: COLORS.white
  },
  url: {
    color: COLORS.white,
    padding: theme.spacing(2)
  },
  shot: {
    maxHeight: 250
  }
}));

interface Props {
  project: Project;
}

function ProjectCard(props: Props) {
  const { project } = props;
  const { id, name, url, srcCode, tags, description, shots } = project;
  const styles = useStyles();

  return (
    <Box
      component={Card}
      key={id}
      p={4}
      my={4}
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box flexGrow={1}>
        <h2>{name}</h2>
        <p>{description}</p>
        {url && (
          <IconLink
            icon={<LaunchSharpIcon />}
            link={url}
            tooltipTitle={
              <>
                <h3 className={styles.header}>Site:</h3>
                <code className={styles.url}>{url}</code>
              </>
            }
          />
        )}
        {srcCode && (
          <IconLink
            icon={<GitHubIcon />}
            link={srcCode}
            tooltipTitle={
              <>
                <h3 className={styles.header}>Source Code:</h3>
                <code className={styles.url}>{srcCode}</code>
              </>
            }
          />
        )}
      </Box>
      {shots ? (
        <Box flex={1} pl={4}>
          <img
            src={shots[0]}
            alt={`${name} Screenshot`}
            className={styles.shot}
          />
        </Box>
      ) : null}
    </Box>
  );
}

export default ProjectCard;
