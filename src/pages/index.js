import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Layout } from "@components"
import { Banner, Articles, MapView, About } from "@views"
import { BlogPostType, MarkdownType, YoutubeVideoType } from "~/types"

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
      facebookLink,
    },
    postItems: { nodes: posts },
    youtubeVideos: { nodes: videos },
  },
}) => {
  return (
    <Layout>
      <SEO />
      <Banner
        heading={heading}
        description={description}
        facebookLink={facebookLink}
      />

      <About description={about} />
      <MapView howToFind={howToFind} howToAdd={howToAdd} />
      <Articles posts={posts} videos={videos} />
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
      facebookLink
    }

    postItems: allContentfulBlogPost(
      filter: { content: { childMarkdownRemark: { excerpt: { ne: null } } } }
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        slug
        title
        createdAt
        content {
          childMarkdownRemark {
            excerpt(pruneLength: 150)
          }
        }
        heroImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    youtubeVideos: allContentfulYoutubeVideo(
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        createdAt
        title
        link
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      howToFindPlaces: MarkdownType.isRequired,
      howToAddPlace: MarkdownType.isRequired,
      facebookLink: PropTypes.string.isRequired,
    }),
  }),
  postItems: PropTypes.shape({ nodes: PropTypes.arrayOf(BlogPostType) }),
  youtubeVideos: PropTypes.shape({
    nodes: PropTypes.arrayOf(YoutubeVideoType),
  }),
}

export default IndexPage
