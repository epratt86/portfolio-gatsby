import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const { blog, posts, post } = BlogStyles

  // Contentful Query
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head
        title="Blog"
        description="Welcome to my blog page. Here is where I talk about all things tech - and maybe even a few things that arent!"
      />
      <section id={blog}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center display-4">Blog</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-5">Checkout my posts below</h4>
              <ol className={posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                  return (
                    <li className={post}>
                      <Link to={`/blog/${edge.node.slug}`}>
                        <h2>{edge.node.title}</h2>
                        <p>{edge.node.publishedDate}</p>
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPage
