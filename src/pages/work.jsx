import React from 'react';

import { Layout } from '../components/Layout/layout';
import { ProjectPreview } from '../components/ProjectPreview/project-preview';
import { useProjects } from '../hooks/useProjects';
import { SEO } from '../components/Seo/seo';

import { Container, Header } from '../page-styles/work.styles';

const WorkPage = ({ location }) => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO
        title={'Work'}
        description={`Ivan's design and web development projects`}
        slug={location.pathname}
      />
      <Container>
        <Header>
          <h1>Work</h1>
          <p>Check out some of my design and web development projects.</p>
        </Header>
        {projects.map(project => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default WorkPage;
