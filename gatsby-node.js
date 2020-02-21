const path = require("path")
const moment = require("moment")
require("moment-timezone")
const slugify = require("slugify")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPages = await buildBlog({ graphql, reporter })
  blogPages.forEach(page => createPage(page))
}

const buildBlog = async ({ graphql, reporter }) => {
  const markdownBlogTemplate = path.resolve("./src/templates/markdown-blog.js")
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___timestamp] }
      ) {
        edges {
          node {
            frontmatter {
              path
              timestamp
              title
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

