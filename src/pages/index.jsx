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
        <h1>Hi, I'm {data.site.siteMetadata.title} aka alfienity!</h1>
        <p>
          I love to explore the full stack web development cosmos to alfienity
          and beyond. Lately it's been mostly frontend but I am gradually
          leveling up my backend and software architecture skills too.
        </p>
        <p>
          I also love to write about the things I've built and learned. Check
          them out!
        </p>
        <h3>
          {data.allMdx.totalCount} Personal Blog Post
          {data.allMdx.totalCount > 1 ? "s" : ""}
        </h3>
        {data.allMdx.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h4
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    opacity: 0.75;
                    font-size: 1rem;
                  `}
                >
                  — {node.frontmatter.date} ({node.timeToRead} min
                  {node.timeToRead > 1 ? "s" : ""} read)
                </span>
              </h4>
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
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          id
        }
      }
      totalCount
    }
  }
`;
