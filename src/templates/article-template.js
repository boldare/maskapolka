import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { BlogPostType } from "~/types"
import { Layout, SEO } from "@components"
import { Article } from "@views"

const ArticleTemplate = ({
  data: {
    post: {
      slug,
      title,
      contentful_id: id,
      description,
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
      <SEO
        title={title}
        metaTitle={title}
        description={description}
        cover={heroImage.file.url}
      />
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
      description
      content {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
        }
      }
      authors {
        name
        email
        image {
          fluid(maxWidth: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default React.memo(ArticleTemplate)
