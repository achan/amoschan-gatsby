import Footer from "./footer"
import Header from "./header"
import React from "react"

const Layout = ({ data, children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

