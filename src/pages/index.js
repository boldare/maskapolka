import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Layout } from "@components"
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
      aboutAction: {
        childMarkdownRemark: { html: about },
      },
    },
    postItems: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner heading={heading} description={description} />

      <About description={about} />
      <MapView howToFind={howToFind} howToAdd={howToAdd} />
      <Articles posts={posts} />
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

    postItems: allContentfulBlogPost(
      filter: { content: { childMarkdownRemark: { excerpt: { ne: null } } } }
    ) {
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
