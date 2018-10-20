import React from "react";
import { graphql } from "gatsby";
import Container from "../components/container";

export default ({ data }) => (
  <Container>
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
