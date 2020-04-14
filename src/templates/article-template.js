import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { DiscussionEmbed } from "disqus-react"
import { BlogPostType } from "~/types"

const ArticleTemplate = ({
  data: {
    post: { slug, title, contentful_id: id },
  },
}) => {
  return (
    <DiscussionEmbed
      shortname="maskapolka"
      config={{
        url: `https://maskapolka.pl/${slug}`,
        identifier: id,
        title: title,
      }}
    />
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.shape({ post: BlogPostType }),
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      contentful_id
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
`

export default React.memo(ArticleTemplate)
