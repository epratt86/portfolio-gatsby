import React from "react"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  const { content } = layoutStyles
  return (
    <div>
      <div className={content}>{props.children}</div>
    </div>
  )
}

export default Layout
