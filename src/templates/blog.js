import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} className='d-block img-fluid m-auto' />
      },
    },
  }
  return (
    <Layout>
      <Head
        title={props.data.contentfulBlogPost.title}
        description='A blog post by Eric Pratt'
      />
      <section id={styles.blog}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='text-center display-4'>Blog Post</h1>
              <div className='bottom-line' />
              <h4 className='text-center mb-4'>
                {props.data.contentfulBlogPost.publishedDate}
              </h4>
              <article className={styles.post}>
                {documentToReactComponents(
                  props.data.contentfulBlogPost.body.json,
                  options
                )}
                <Link to={"/blog"} className='button-blue'>
                  Back
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blog
