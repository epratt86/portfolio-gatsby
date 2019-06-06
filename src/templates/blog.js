import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "./blog.module.scss"

// query to grab markdown files
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title} />
      <section id={styles.blog}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="mt-5 text-center display-4">
                {props.data.markdownRemark.frontmatter.title}
              </h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-5">
                {props.data.markdownRemark.frontmatter.date}
              </h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.markdownRemark.html,
                }}
              />
              <Link to={"/blog"} className="btn btn-outline-primary btn-lg">
                Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
