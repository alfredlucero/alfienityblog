module.exports = {
  siteMetadata: {
    title: "alfienitylucero",
  },
  plugins: [
    // For PWAs, this provides a web app manifest JSON file that tells browser about web app
    // and how it should behave when installed on the user's mobile device or desktop
    // It creates a manifest.webmanifest
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "alfienityblog",
        short_name: "alfienity",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/icon.jpg",
      },
    },
    // For PWAs, provides a service worker to run in the background, deciding to serve network or cached content
    // based on connectivity, allowing for a seamless, managed offline experience
    // This needs to be listed after the manifest plugin so this can cache the created manifest.webmanifest
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    // Provides drop-in support for server rendering data added with React Helmet,
    // which gives a React component interface for you to manage your document head
    // in order to add metadata to pages like title/description for SEO
    "gatsby-plugin-react-helmet",
  ],
};
