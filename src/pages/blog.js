import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

import BlogStyles from "./blog.module.scss"

const BlogPage = () => {
  const { blog } = BlogStyles

  // Markdown Query
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
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
              <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                  return (
                    <li>
                      <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
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
