import BlogPost from "../components/blog-post"
import Layout from "./post-layout"
import React from "react"
import { Link, graphql } from "gatsby"
import { useMarkdownAst } from "../common/use-markdown-ast"

export const Paragraph = ({ children }) => <p className="mb-3 last:mb-0 md:mb-6 lg:mb-8 md:text-lg lg:text-xl">{children}</p>
export const Pre = ({ children }) => <pre className="bg-gray-900 p-4 -mx-2 overflow-x-scroll mb-3 md:mb-6 lg:mb-8 text-sm md:text-base lg:text-lg">{children}</pre>
export const Code = ({ children }) => <code className="px-2 py-1 font-mono">{children}</code>
export const BlockQuote = ({ children }) => <blockquote className="border-dashed border-l-2 border-indigo-200 p-2 md:pl-6 mb-3 md:mb-6 lg:mb-8">{children}</blockquote>
export const Header2 = ({ children }) => <h2 className="md:text-2xl lg:text-3xl font-semibold">{children}</h2>
export const UnorderedList = ({ children }) => <ul className="list-disc list-outside mb-3 last:mb-0 md:mb-6 lg:mb-8 md:text-lg lg:text-xl">{children}</ul>
export const ListItem = ({ children }) => <li className="">{children}</li>

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const renderAst = useMarkdownAst({ components: { ul: UnorderedList, li: ListItem, h2: Header2, p: Paragraph, pre: Pre, blockquote: BlockQuote, code: Code } })

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

