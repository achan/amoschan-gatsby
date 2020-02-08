import Footer from "./footer"
import Header from "./header"
import React from "react"

const Layout = ({ data, children }) => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

