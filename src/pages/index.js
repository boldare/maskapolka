import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Layout } from "@components"
import { Banner, Articles, MapView, About, SupportersBanners } from "@views"
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
      collapsesTop,
      collapsesBottom,
      mediaPartners,
    },
    postItems: { nodes: posts },
    youtubeVideos: { nodes: videos },
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

      <About description={about} collapses={collapsesTop} />
      <MapView collapses={collapsesBottom} />
      <Articles posts={posts} videos={videos} />
      <SupportersBanners mediaPartners={mediaPartners} />
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
      collapsesTop {
        contentful_id
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      collapsesBottom {
        contentful_id
        title
        content {
          childMarkdownRemark {
            html
          }
        }
      }
      mediaPartners {
        link
        img {
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
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
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      facebookLink: PropTypes.string.isRequired,
      collapsesTop: PropTypes.arrayOf(PropTypes.shape(CollapseType)),
      collapsesBottom: PropTypes.arrayOf(PropTypes.shape(CollapseType)),
    }),
  }),
  postItems: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(BlogPostType)),
  }),
  youtubeVideos: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape(YoutubeVideoType)),
  }),
}

export default IndexPage
