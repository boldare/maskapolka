import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { BlogPostType } from "~/types"
import { Layout } from "@components"
import { Article } from "@views"

const ArticleTemplate = ({
  data: {
    post: {
      slug,
      title,
      contentful_id: id,
      heroImage,
      content: {
        childMarkdownRemark: { html: body },
      },
      authors,
    },
  },
}) => {
  return (
    <Layout>
      <Article
        id={id}
        slug={slug}
        title={title}
        img={heroImage}
        body={body}
        authors={authors}
        sources={["first", "second"]}
      />
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  data: PropTypes.shape({ post: PropTypes.shape(BlogPostType) }).isRequired,
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      contentful_id
      slug
      title
      createdAt(formatString: "DD/MM/YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      authors {
        name
        email
        image {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default React.memo(ArticleTemplate)
