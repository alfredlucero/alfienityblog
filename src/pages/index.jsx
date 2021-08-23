import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/Layout";

const Landing = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title} Blog</title>
      </Helmet>
      <div>
        <h2>Hi, I'm {data.site.siteMetadata.title} aka alfienity!</h2>
        <p>
          I love to explore the full stack web development cosmos to alfienity
          and beyond. Lately it's been mostly frontend but I am gradually
          leveling up my backend and software architecture skills too.
        </p>
        <p>
          I also love to write about the things I've built and learned. Check
          them out!
        </p>
        <h4>{data.allMarkdownRemark.totalCount} Personal Blog Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Landing;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
