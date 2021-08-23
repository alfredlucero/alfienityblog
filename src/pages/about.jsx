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
    <p>
      Aspiring software architect. Exploring full stack web development. Mostly
      frontend, but passionately researching more about backend too.
    </p>
  </Layout>
);

// Software engineer on the EI Frontend team for Twilio SendGrid, covering the web app customers log into to see their settings and email data on https://app.sendgrid.com.

// Maintained and converted many legacy Backbone/Marionette pages to redesigned React ones. In many projects acted as the product owner - handling epic/Jira ticket creation, providing estimates, forming research docs, meeting with stakeholders, interfacing with designers/product/engineers - and tech lead in laying down the state management and page patterns with React/Redux/TypeScript.

// Led from blueprint to execution of the migration of our web app's hosting from on-prem nginx servers to AWS S3 and CloudFront as our CDN with Terraform. Expedited manual one hour deploys to automated one-click button deploys through Buildkite within minutes for each environment.

// Paved the way for adopting Cypress for E2E testing at SendGrid and Twilio at large by starting up the first project and converting tests from WebdriverIO, convincing stakeholders, managing the organization's dashboard, and teaching others about best practices after writing hundreds of tests and hooking them up to CICD. Contributor to the Twilio Cypress helpers library in adding custom commands and TypeScript support.

// Contributor to SendGrid's old styleguide (https://styleguide.sendgrid.com/), React ui-components, and side navigation libraries. Active in providing feedback for Twilio's Paste design system as we use the component library (https://paste.twilio.design/) in our newer pages.

// Dedicated to adding code documentation and internal wikis about the team's ownership, tech stack, and general Cypress knowledge. Wrote and published 9 blog posts to the SendGrid technical blog, bringing in over 15K unique visitors (excluding customers) as of April 2021.

// Mentored and onboarded new developers and UCI students effectively onto teams and taught about frontend and testing through company presentations.

// Promoted from L1 to L3 (Senior) so far.

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
