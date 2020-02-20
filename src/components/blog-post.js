import React from "react"
import { Link } from "gatsby"

const Title = ({ url, children }) => {
  if (url) {
    return <a href={url}>{children}</a>
  }

  return children
}

const BlogPost = ({ className, post }) => {
  return (
    <div className={`font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl text-gray-700 ${className}`}>
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold">
        <Title url={post.link}>{post.title}</Title>
      </h1>
      <div className="mb-4">
        <Link className="border-0 text-sm md:text-base text-gray-400" to={post.path}>{post.timestamp}</Link>
      </div>
      {post.html}
      <div className="mt-2 md:mt-4">
        {
          post.tags.split(",")
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

export default BlogPost

