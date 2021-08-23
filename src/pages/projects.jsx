import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Projects = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.site.siteMetadata.title}'s Projects</title>
    </Helmet>
    <h2>{data.site.siteMetadata.title}'s Project</h2>
    <ul>
      <li>JS All The Frontends</li>
      <li>GoBRM/TRM</li>
      <li>Old Portfolio Site</li>
      <li>ZMB</li>
      <li>Pogs</li>
      <li>Portfelo</li>
    </ul>
  </Layout>
);

export default Projects;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
