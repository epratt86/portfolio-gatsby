import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const { content } = layoutStyles
  return (
    <div>
      <Nav />
      <div className={content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
