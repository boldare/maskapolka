import React from "react"
import PropTypes from "prop-types"
import "./YoutubeTile.scss"
import { getYoutubeThumbnailUrl } from "~/utils"

const YoutubeTile = ({ url, title }) => {
  return (
    <article className="youtube-tile">
      <div className="youtube-tile__img-wrapper">
        <img
          className="youtube-tile__img"
          src={getYoutubeThumbnailUrl(url)}
          alt={title}
        />
      </div>
      <span className="youtube-tile__indicator">youtube.com</span>
      <h1 className="youtube-tile__title heading-secondary">{title}</h1>
    </article>
  )
}

YoutubeTile.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default React.memo(YoutubeTile)
