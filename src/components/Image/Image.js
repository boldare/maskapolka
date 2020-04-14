import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { classnames } from "~/utils"
import { ImageFluid } from "~/types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ className, fluid }) => {
  return <Img className={classnames(className)} fluid={fluid} />
}

Image.propTypes = {
  fluid: ImageFluid.isRequired,
  className: PropTypes.string,
}

Image.defaultProps = {
  className: "",
}

export default Image
