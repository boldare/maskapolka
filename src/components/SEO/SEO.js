/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, metaTitle, cover }) {
  const {
    site,
    settings: {
      cover: {
        file: { url },
      },
      metaTitle: defaultMetaTitle,
      metaDescription: defaultMetaDescription,
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        settings: contentfulUstawieniaSingle {
          cover {
            file {
              url
            }
          }
          metaTitle
          metaDescription
        }
      }
    `
  )

  const coverUrl = `https:${cover || url}`
  const metaDescription = description || defaultMetaDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || metaTitle || defaultMetaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: coverUrl,
        },
        {
          property: `og:title`,
          content: metaTitle || defaultMetaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: coverUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle || defaultMetaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: coverUrl,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: null,
  cover: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  cover: PropTypes.string,
}

export default SEO
