import React from "react"
import rehypeReact from "rehype-react"

export const useMarkdownAst = ({ components }) => ast => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components,
  }).Compiler

  return renderAst(ast)
}

