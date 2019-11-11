import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import NavBack from '../components/nav-back';
import Project from '../components/project.js';
import SEO from '../components/seo';
import '../styles/projects.scss';

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <div className="content">
      <h1 className="title">Projects</h1>
      <p>Here are some projects I've worked on recently:</p>

      <div className="projects">
        {data.allProjectsJson.edges.map(edge => (
          <Project key={edge.node.title} data={edge.node} />
        ))}
      </div>
      <NavBack />
    </div>
  </Layout>
);
export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          description
          tech
          link
          img
          active_img
        }
      }
    }
  }
`;

export default ProjectPage;
