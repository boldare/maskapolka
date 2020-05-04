import React from "react"
import PropTypes from "prop-types"
import "./Banners.scss"
import { ImageType } from "~/types"
import Image from "../Image/Image"

const Banners = ({ banners }) => {
  return (
    <ul className="banners">
      {banners.map(banner => (
        <li key="">
          <Image className="banners__banner" fluid={banner.fluid} />
        </li>
      ))}
    </ul>
  )
}

Banners.propTypes = {
  banners: PropTypes.arrayOf(ImageType).isRequired,
}

export default React.memo(Banners)
