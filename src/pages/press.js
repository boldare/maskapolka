import React from "react"
import PropTypes from "prop-types"
import { SEO, Layout } from "@components"
import { Press } from "@views"
import { graphql } from "gatsby"

const PressPage = ({
  data: {
    settings: {
      pressPack: {
        file: { url },
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Press pack" metaTitle="Press pack" />
      <Press packUrl={`https:${url}`} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PressPage {
    settings: contentfulUstawieniaSingle {
      pressPack {
        file {
          url
        }
      }
    }
  }
`

PressPage.propTypes = {
  data: PropTypes.shape({
    settings: PropTypes.shape({
      pressPack: PropTypes.shape({
        file: PropTypes.shape({ url: PropTypes.string }),
      }),
    }),
  }),
}

export default PressPage
