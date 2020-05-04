import React from "react"
import PropTypes from "prop-types"
import "./Banners.scss"
import { ImageType } from "~/types"
import Image from "../Image/Image"

const Banners = ({ banners }) => {
  return (
    <ul className="banners">
      {banners.map(banner => (
        <li key={banner.link}>
          <a
            href={banner.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={banner.link}
          >
            <Image className="banners__banner" fluid={banner.img.fluid} />
          </a>
        </li>
      ))}
    </ul>
  )
}

Banners.propTypes = {
  banners: PropTypes.arrayOf(ImageType).isRequired,
}

export default React.memo(Banners)
