require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@jagoral`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken:
          process.env.CONTENTFUL_API === "preview"
            ? process.env.CONTENTFUL_PREVIEW_TOKEN
            : process.env.CONTENTFUL_DELIVERY_TOKEN,
        host:
          process.env.CONTENTFUL_API === "preview"
            ? "preview.contentful.com"
            : "cdn.contentful.com",
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `@import "${__dirname}/src/styles/abstracts";`,
      },
    },
    // `gatsby-plugin-svg-sprite-loader`,
    `gatsby-transformer-remark`,
  ],
}
