import PropTypes from "prop-types"

export const ImageType = PropTypes.shape

export const MarkdownType = PropTypes.shape({
  childMarkdownRemark: PropTypes.shape({ html: PropTypes.string.isRequired })
    .isRequired,
})

export const AuthorType = {
  name: PropTypes.string.isRequired,
  shortBio: PropTypes.string.isRequired,
  email: PropTypes.string,
  image: ImageType.isRequired,
}

export const BlogPostType = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  heroImage: ImageType.isRequired,
  description: MarkdownType,
  content: MarkdownType,
  source: PropTypes.string.isRequired,
}
