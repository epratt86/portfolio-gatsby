import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const { blog, row, col } = BlogStyles
  return (
    <Layout>
      <Head
        title="Blog"
        description="Welcome to my blog page. Here is where I talk about all things tech - and maybe even a few things that arent!"
      />
      <div className={blog}>
        <div className="container">
          <div className={row}>
            <div className={col}>
              <h1>Page Coming Soon</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
