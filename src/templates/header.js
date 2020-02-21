import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <div className="border-indigo-500 border-t-2 mb-6 pt-2">
        <div className="font-sans container mx-auto px-2 max-w-xl md:max-w-2xl lg:max-w-3xl tracking-wide">
          <Link className="text-indigo-500 font-bold uppercase border-0 hover:opacity-75" to="/">amoschan.com</Link><Link className="text-indigo-500 tracking-widest uppercase font-light border-0 hover:opacity-75" to="/blog">/Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Header

