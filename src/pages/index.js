import React, { useState } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { SEO, Hamburger, Icon, Layout } from "@components"
import { Banner, Articles, MapView } from "@views"
import { BlogPostType } from "~/types"

const IndexPage = ({
  data: {
    settings: { heading, description },
    postItems: { nodes: posts },
  },
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <div className="main__logo">
        <Icon type="logo" />
      </div>
      <Banner heading={heading} description={description} />
      <div className="main__hamburger">
        <Hamburger
          open={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <Articles posts={posts} />
      <MapView />
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
    settings: contentfulUstawienia {
      heading
      description
    }

    postItems: allContentfulBlogPost {
      nodes {
        slug
        title
        createdAt(formatString: "DD/MM/YYYY")
        description {
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
