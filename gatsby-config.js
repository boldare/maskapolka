require("dotenv").config()

const productionPlugins = [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_CODE,
    },
  },
]

console.log({ host: process.env.HOST })

module.exports = {
  siteMetadata: {
    title: `Maska Polka`,
    description: `Łączymy osoby szyjące maseczki z tymi, którzy ich potrzebują.`,
    author: `@jagoral`,
    siteUrl: "https://maskapolka.netlify.com/",
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
        name: `Maska Polka`,
        short_name: `maskapolka`,
        start_url: `/`,
        background_color: `#cbe8ec`,
        theme_color: `#cbe8ec`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ].concat(process.env.NODE_ENV === "production" ? productionPlugins : []),
}
