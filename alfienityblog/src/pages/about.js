import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Container from "../components/container";

export default ({ data }) => (
  <Container>
    <Helmet>
      <title>About {data.site.siteMetadata.title}</title>
    </Helmet>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>Frontend Software Engineer II at SendGrid</p>
  </Container>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
