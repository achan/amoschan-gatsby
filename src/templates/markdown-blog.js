import React from "react"
import { Link, graphql } from "gatsby"
import { useMarkdownAst } from "../common/use-markdown-ast"

const Title = ({ url, children }) => {
  if (url) {
    return <Link to={url}>{children}</Link>
  }

  return children
}

const Paragraph = ({ children }) => <p className="mb-3 md:mb-6 lg:mb-8 md:text-lg lg:text-xl">{children}</p>

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const renderAst = useMarkdownAst({ components: { p: Paragraph } })

  return (
    <div className="font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-700">
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
        <Title url={frontmatter.external_link}>{frontmatter.title}</Title>
      </h1>
      <div className="mb-4">
        <Link className="border-0 text-sm md:text-base text-gray-400" to={frontmatter.path}>{frontmatter.timestamp}</Link>
      </div>
      {renderAst(htmlAst)}
      <div className="mt-2 md:mt-4">
        {
          frontmatter.tags.split(",")
            .map(t => t.trim())
            .map(t => {
              return (
                <Link
                  to={`/tag/${t}`}
                  className="bg-gray-400 text-white text-xs md:text-sm mr-2 px-2 py-1 rounded-full tracking-wide hover:text-white hover:bg-gray-500 border-0" key={t}>
                  #{t}
                </Link>
              )
            })
        }
      </div>
    </div>
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

