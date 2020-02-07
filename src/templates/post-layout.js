import Footer from "./footer"
import React from "react"

const Layout = ({ data, children }) => {
  return (
    <div className="bg-gray-100">
      {children}
      <Footer />
    </div>
  )
}

export default Layout

