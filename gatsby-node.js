const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  // Only the original creator of a node can directly modify the node so for all other plugins we must
  // use this to create additional fields
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    // createFilePath handles finding the parent File node along with creating the slug
    const slug = createFilePath({ node, getNode, basePath: "pages" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

// In order to programmatically create pages, you must
// query the data with GraphQL and map the query results to pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("./src/templates/blog-post.js"),
          context: {
            // Data passed to context is available in page queries as GraphQL variables
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
