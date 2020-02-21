import BlogPost from "../components/blog-post"
import Layout from "../templates/post-layout"
import React from "react"
import { Link, graphql } from "gatsby"
import { useMarkdownAst } from "../common/use-markdown-ast"

const Title = ({ url, children }) => {
  if (url) {
    return <a href={url}>{children}</a>
  }

  return children
}

const Template = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node: { frontmatter } }) => ({
    title: frontmatter.title,
    path: frontmatter.path,
    timestamp: frontmatter.timestamp,
    tags: frontmatter.tags.split(",").map(t => t.trim()),
  }))

  const postsByTags = posts.reduce((postsByTags, post) => {
      post.tags.forEach(tag => {
        const posts = postsByTags[tag] ?? []
        posts.push(post)
        postsByTags[tag] = posts
      })
      return postsByTags
    }, {})

  const tags = Object.keys(postsByTags).sort()

  return (
    <Layout>
      <div className="font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-700 sm:mt-12 sm:mb-24">
        <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6">Tag Index</h1>
        <ul>
          {
            tags.map(tag => (
              <li>
                <a name={tag} className="uppercase tracking-wider text-gray-600 border-b-0">#{tag}</a>
                <ul className="list-disc ml-6 mb-4 sm:mb-8">
                  {postsByTags[tag].map(post => (
                    <li className="text-base">
                      <Link to={post.path}>{post.title}</Link>
                      <span className="text-gray-400 text-xs ml-2 tracking-wider">{post.timestamp}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query tags {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            timestamp(formatString: "YYYY.M.D")
            title
            path
            tags
          }
        }
      }
    }
  }
`

