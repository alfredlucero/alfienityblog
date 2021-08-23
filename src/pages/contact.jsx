import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const Contact = ({ data }) => (
  <Layout>
    <Helmet>
      <title>Contact {data.site.siteMetadata.title}</title>
    </Helmet>
    <h2>Contact {data.site.siteMetadata.title}</h2>
    <ul>
      <li>Github github.com/alfredlucero</li>
      <li>LinkedIn linkedin.com/in/alfredlucero</li>
    </ul>
  </Layout>
);

export default Contact;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
