import PropTypes from "prop-types"

export const ImageFluid = PropTypes.shape({
  aspectRatio: PropTypes.number,
  base64: PropTypes.string,
  sizes: PropTypes.string,
  srcSet: PropTypes.string,
})

export const ImageType = PropTypes.shape({
  fluid: ImageFluid,
})

export const MarkdownType = PropTypes.shape({
  childMarkdownRemark: PropTypes.shape({
    html: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
})

export const AuthorType = {
  name: PropTypes.string.isRequired,
  image: ImageType.isRequired,
  email: PropTypes.string.isRequired,
}

export const BlogPostType = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  heroImage: ImageType.isRequired,
  description: MarkdownType,
  content: MarkdownType,
  sources: PropTypes.arrayOf(PropTypes.string),
}
