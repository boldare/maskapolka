import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO } from "@components"
import { Banner } from "@views"
import { BlogPostType } from "~/types"

const IndexPage = ({
  data: {
    settings: { heading, description },
    posts,
  },
}) => {
  console.log(posts)
  return (
    <>
      <SEO title="Home" />

      <Banner heading={heading} description={description} />
      <div className="map">
        <iframe
          title="map"
          allow="geolocation *; camera *;"
          frameBorder="0"
          src="https://www.mapotic.com/maskapolka-1/embed"
        ></iframe>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query HomePage {
    settings: contentfulUstawienia {
      heading
      description
    }

    posts: allContentfulBlogPost {
      edges {
        node {
          slug
          title
          createdAt(formatString: "DD/MM/YYYY")
          description {
            childMarkdownRemark {
              html
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
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      heading: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
  posts: PropTypes.shape({ nodes: PropTypes.arrayOf(BlogPostType) }),
}

export default IndexPage
