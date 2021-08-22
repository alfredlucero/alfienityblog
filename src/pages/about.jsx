import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const About = ({ data }) => (
  <Layout>
    <Helmet>
      <title>About {data.site.siteMetadata.title}</title>
    </Helmet>
    <h2>About {data.site.siteMetadata.title}</h2>
    <p>Senior Software Engineer</p>
    <p>Full stack web development is the way. Mostly frontend lately, but passionately researching more about backend too.</p>
  </Layout>
);

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
