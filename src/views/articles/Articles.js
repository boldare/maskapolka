import React, { useState } from "react"
import PropTypes from "prop-types"
import "./Articles.scss"
import { BlogPostType, YoutubeVideoType } from "~/types"
import { ArticleTile, YoutubeTile, Button } from "@components"
import { Link } from "gatsby"

const YoutubeBox = ({ link, title }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
    <YoutubeTile url={link} title={title} />
  </a>
)

const ArticleBox = ({ slug, title, content, heroImage }) => (
  <Link to={`/blog/${slug}`} aria-label={title}>
    <ArticleTile
      title={title}
      excerpt={content.childMarkdownRemark.excerpt}
      image={heroImage}
    />
  </Link>
)

const Articles = ({ posts, videos }) => {
  const items = [
    ...posts.map(p => ({ ...p, type: "post" })),
    ...videos.map(v => ({ ...v, type: "video" })),
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  const [limit, setLimit] = useState(4)

  return (
    <section className="articles section" id="articles">
      <h2 className="heading-primary">Aktualności:</h2>
      <p className="articles__paragraph heading-secondary">
        Staramy się na bieżąco pisać o tym, co się dzieje wokół akcji i nie
        tylko.
      </p>
      <ul className="articles__list">
        {items.slice(0, limit).map(item => (
          <li className="articles__list-item" key={item.createdAt}>
            {item.type === "post" ? (
              <ArticleBox {...item} />
            ) : (
              <YoutubeBox {...item} />
            )}
          </li>
        ))}
      </ul>
      {limit < items.length && (
        <Button
          className="articles__show-more"
          onClick={() => setLimit(limit + 4)}
          color="white"
        >
          Pokaż więcej
        </Button>
      )}
    </section>
  )
}

Articles.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(BlogPostType)),
  videos: PropTypes.arrayOf(PropTypes.shape(YoutubeVideoType)),
}

export default React.memo(Articles)
