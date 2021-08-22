import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Container from "../components/Container";

const About = ({ data }) => (
  <Container>
    <Helmet>
      <title>About {data.site.siteMetadata.title}</title>
    </Helmet>
    <h2>About {data.site.siteMetadata.title}</h2>
    <p>Senior Software Engineer</p>
    <p>Anotha one</p>

  </Container>
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
