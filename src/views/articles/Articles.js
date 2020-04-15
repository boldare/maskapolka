import React from "react"
import PropTypes from "prop-types"
import "./Articles.scss"
import { BlogPostType, YoutubeVideoType } from "~/types"
import { ArticleTile, YoutubeTile } from "@components"
import { Link } from "gatsby"

const Articles = ({ posts, videos }) => {
  return (
    <section className="articles section" id="articles">
      <h2 className="heading-primary">Aktualności:</h2>
      <p className="articles__paragraph heading-secondary">
        Staramy się na bieżąco pisać o tym, co się dzieje wokół akcji i nie
        tylko.
      </p>
      <ul className="articles__list">
        {posts.map(post => (
          <li className="articles__list-item" key={post.slug}>
            <Link to={`/blog/${post.slug}`} aria-label={post.title}>
              <ArticleTile
                title={post.title}
                excerpt={post.content.childMarkdownRemark.excerpt}
                image={post.heroImage}
              />
            </Link>
          </li>
        ))}
      </ul>
      <ul className="articles__list">
        {videos.map(video => (
          <li className="articles__list-item" key={video.url}>
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={video.title}
            >
              <YoutubeTile url={video.link} title={video.title} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

Articles.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(BlogPostType)),
  videos: PropTypes.arrayOf(PropTypes.shape(YoutubeVideoType)),
}

export default React.memo(Articles)
