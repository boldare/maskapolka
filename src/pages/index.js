import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Layout } from "@components"
import { Banner, Articles, MapView, About } from "@views"
import { BlogPostType, CollapseType, YoutubeVideoType } from "~/types"

const IndexPage = ({
  data: {
    settings: {
      heading,
      description,
      aboutAction: {
        childMarkdownRemark: { html: about },
      },
      facebookLink,
    },
    postItems: { nodes: posts },
    youtubeVideos: { nodes: videos },
    collapseItems: { nodes: collapses },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner
        heading={heading}
        description={description}
        facebookLink={facebookLink}
      />

      <About description={about} />
      <MapView collapses={collapses} />
      <Articles posts={posts} videos={videos} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomePage {
    settings: contentfulUstawieniaSingle {
      heading
      description
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
          fluid(maxWidth: 600) {
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

    collapseItems: allContentfulRozwijaneMenu {
      nodes {
        contentful_id
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      facebookLink: PropTypes.string.isRequired,
    }),
  }),
  postItems: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(BlogPostType)),
  }),
  youtubeVideos: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(YoutubeVideoType)),
  }),
  collapseItems: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(CollapseType)),
  }),
}

export default IndexPage
