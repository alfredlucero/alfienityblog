import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
// import { Link } from "gatsby";
// import Container from "../components/container";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alfienity Blog</title>
      </Helmet>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          alfienity
        </h1>
        <p>
          Exploring the full stack web development cosmos to alfienity and
          beyond.
        </p>
        <h4>{data.allMarkdownRemark.totalCount} Blog Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                className={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  className={css`
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

// <Container>
//   <h1>alfienitylucero</h1>
//   <p>
//     Exploring the full stack web development cosmos to alfienity and beyond~
//   </p>
//   <Link to="/about/">About</Link>
// </Container>

export const query = graphql`
  query {
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
