import React from "react"
import PropTypes from "prop-types"
import "./ArticleTile.scss"
import { ImageType } from "~/types"
import Image from "../Image/Image"

const ArticleTile = ({ title, excerpt, image }) => {
  return (
    <article className="article-tile">
      <div className="article-tile__img-wrapper">
        <Image className="article-tile__img" fluid={image.fluid} />
      </div>
      <h1 className="article-tile__title heading-secondary">{title}</h1>
      <p className="article-tile__excerpt heading-tertiary">{excerpt}</p>
      <div className="article-tile__read-more">Czytaj więcej</div>
    </article>
  )
}

ArticleTile.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  image: ImageType,
}

export default React.memo(ArticleTile)
