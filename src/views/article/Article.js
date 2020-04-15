import React from "react"
import PropTypes from "prop-types"
import { DiscussionEmbed } from "disqus-react"
import "./Article.scss"
import { ImageType, AuthorType } from "~/types"
import { Image, Button } from "@components"

const Article = ({ id, slug, title, body, img, authors, sources }) => {
  return (
    <section className="article section">
      <Image className="article__img" fluid={img.fluid} />
      <div className="article__description">
        <ul className="article__authors">
          {authors.map(author => (
            <li className="article__author">
              <Image
                className="article__author-img"
                fluid={author.image.fluid}
              />
              <div>
                {author.name}
                <br />
                {author.email}
              </div>
            </li>
          ))}
        </ul>
        <Button
          onClick={() => document.getElementById("comments").scrollIntoView()}
        >
          Dołącz do dyskusji
        </Button>
      </div>
      <h1 className="article__title heading-primary">{title}</h1>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
      {sources && (
        <div className="article__sources">Źródła: {sources.join(", ")}</div>
      )}
      <div id="comments">
        <DiscussionEmbed
          shortname="maskapolka"
          config={{
            url: `https://maskapolka.pl/${slug}`,
            identifier: id,
            title: title,
          }}
        />
      </div>
    </section>
  )
}

Article.propTypes = {
  id: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: ImageType,
  sources: PropTypes.arrayOf(PropTypes.string),
  authors: PropTypes.arrayOf(PropTypes.shape(AuthorType)),
}

export default React.memo(Article)
