const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPages = await buildBlog({ graphql })
  blogPages.forEach(page => createPage(page))
}

const buildBlog = async ({ graphql }) => {
  const markdownBlogTemplate = path.resolve("./src/templates/markdown-blog.js")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___timestamp] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running GraphQL query")
    return
  }

  return result.data.allMarkdownRemark.edges.map(({ node }) => (
    {
      path: node.frontmatter.path,
      component: markdownBlogTemplate,
    }
  ))
}

