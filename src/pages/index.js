import React, { useState } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Hamburger, Icon, Layout } from "@components"
import { Banner, Articles, MapView, About } from "@views"
import { BlogPostType } from "~/types"

const IndexPage = ({
  data: {
    settings: {
      heading,
      description,
      howToFindPlaces: {
        childMarkdownRemark: { html: howToFind },
      },
      howToAddPlace: {
        childMarkdownRemark: { html: howToAdd },
      },
    },
    postItems: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner heading={heading} description={description} />

      <Articles posts={posts} />
      <MapView howToFind={howToFind} howToAdd={howToAdd} />
      <About />
      {/* <div className="map">
        <iframe
          title="map"
          allow="geolocation *; camera *;"
          frameBorder="0"
          src="https://www.mapotic.com/maskapolka-1/embed"
        ></iframe>
      </div> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePage {
    settings: contentfulUstawieniaSingle {
      heading
      description
      howToFindPlaces {
        childMarkdownRemark {
          html
        }
      }
      howToAddPlace {
        childMarkdownRemark {
          html
        }
      }
      aboutAction {
        childMarkdownRemark {
          html
        }
      }
    }

    postItems: allContentfulBlogPost {
      nodes {
        slug
        title
        createdAt(formatString: "DD/MM/YYYY")
        content {
          childMarkdownRemark {
            excerpt
          }
        }
        heroImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
  postItems: PropTypes.shape({ nodes: PropTypes.arrayOf(BlogPostType) }),
}

export default IndexPage
