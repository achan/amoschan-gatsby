import BlogPost from "../components/blog-post"
import Layout from "../templates/post-layout"
import React from "react"
import { Link, graphql } from "gatsby"
import { useMarkdownAst } from "../common/use-markdown-ast"
import { Paragraph, Pre, Code, BlockQuote } from "../templates/markdown-blog"

const Title = ({ url, children }) => {
  if (url) {
    return <a href={url}>{children}</a>
  }

  return children
}

const Template = ({ data }) => {
  const renderAst = useMarkdownAst({ components: { p: Paragraph, pre: Pre, blockquote: BlockQuote, code: Code } })
  const posts = data.allMarkdownRemark.edges.map(({ node: { frontmatter, htmlAst } }) => ({
    link: frontmatter.external_link,
    title: frontmatter.title,
    path: frontmatter.path,
    timestamp: frontmatter.timestamp,
    tags: frontmatter.tags,
    html: renderAst(htmlAst)
  }))

  return (
    <Layout>
      <div className="font-sans container mx-auto max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-700">
        {
          posts.map(p => {
            return (
              <div className="mb-16 sm:mt-12 sm:mb-24">
                <BlogPost post={p} />
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query blogs {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___timestamp] }
      limit: 10
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            timestamp(formatString: "MMMM DD, YYYY")
            title
            path
            tags
            external_link
          }
        }
      }
    }
  }
`


