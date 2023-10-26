import GitHubIcon from '@material-ui/icons/GitHub';
import { Container } from '@material-ui/core';
import { projects } from '../data';
import PageTop from '../components/PageTop';
import IconLink from '../components/IconLink';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id='projects'>
      <Container maxWidth='md'>
        <PageTop
          pageTitle='My Projects'
          iconLink={
            <IconLink
              icon={<GitHubIcon />}
              link='https://github.com/brighambandersen?tab=repositories'
              tooltipTitle='Check out all my GitHub repos'
            />
          }
        />
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </Container>
    </section>
  );
}

export default Projects;
