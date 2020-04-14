require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Maska Polka`,
    description: `Łączymy osoby szyjące maseczki z tymi, którzy ich potrzebują.`,
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
    `gatsby-transformer-remark`,
  ],
}
