import BlogPost from "../components/blog-post"
import Layout from "./post-layout"
import React from "react"
import { Link, graphql } from "gatsby"
import { useMarkdownAst } from "../common/use-markdown-ast"

const Paragraph = ({ children }) => <p className="mb-3 md:mb-6 lg:mb-8 md:text-lg lg:text-xl">{children}</p>
const Pre = ({ children }) => <pre className="bg-gray-900 p-4 -mx-2 overflow-x-scroll mb-3 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-lg">{children}</pre>

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const renderAst = useMarkdownAst({ components: { p: Paragraph, pre: Pre } })

  const post = {
    link: frontmatter.external_link,
    title: frontmatter.title,
    path: frontmatter.path,
    timestamp: frontmatter.timestamp,
    tags: frontmatter.tags,
    html: renderAst(htmlAst)
  }

  return (
    <Layout>
      <div className="sm:mt-12 sm:mb-24">
        <BlogPost post={post} />
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
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
`

