const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/article-template.js")
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}

const SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin")

exports.onCreateWebpackConfig = ({ actions, getConfig, rules }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@views": path.resolve(__dirname, "src/views"),
        "~": path.resolve(__dirname, "src"),
      },
    },
  })

  const config = getConfig()
  const imagesTest = String(rules.images().test)

  for (let rule of config.module.rules) {
    if (String(rule.test) === imagesTest) {
      rule.test = new RegExp(imagesTest.replace("svg|", "").slice(1, -1))
    }
  }

  options = {
    spriteFilename: "sprites.[contenthash].svg",
    extract: true,
  }

  config.module.rules.push({
    test: /\.svg$/,
    loader: require.resolve("svg-sprite-loader"),
    options,
  })

  config.plugins.push(new SvgSpriteLoaderPlugin())

  actions.replaceWebpackConfig(config)
}
