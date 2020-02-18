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
        limit: 1000
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
    console.log({ errors: result.errors })
    return
  }

  return result.data.allMarkdownRemark.edges.map(({ node }) => (
    {
      path: buildBlogPath(node.frontmatter),
      component: markdownBlogTemplate,
    }
  ))
}

const buildBlogPath = ({ path, timestamp, title }) => {
  console.log({ path, timestamp })
  const format = `\/YYYY\/MM\/DD\/[${slugify((title || "").toLowerCase())}]`
  const blogPath = path || moment(timestamp).tz("America/New_York").format(format)
  console.log({ path: blogPath })

  return blogPath
}

