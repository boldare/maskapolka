import React from "react"
import PropTypes from "prop-types"
import { DiscussionEmbed } from "disqus-react"
import "./Article.scss"
import { ImageType } from "~/types"
import { Image } from "@components"

const Article = ({ id, slug, title, body, img }) => {
  return (
    <section className="article__comments section">
      <Image className="article__img" fluid={img.fluid} />
      <h1 class="article__title heading-primary">{title}</h1>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
      <DiscussionEmbed
        shortname="maskapolka"
        config={{
          url: `https://maskapolka.pl/${slug}`,
          identifier: id,
          title: title,
        }}
      />
    </section>
  )
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  img: ImageType,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default React.memo(Article)
