import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"
import styles from "./projects.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      title
      body {
        json
      }
    }
  }
`

const Projects = props => {
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
        title={props.data.contentfulProjects.title}
        description='A web project by Eric Pratt'
      />
      <section id={styles.projects}>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 className='text-center display-4'>Project Overview</h1>
              <div className='bottom-line' />
              <article className={styles.post}>
                {documentToReactComponents(
                  props.data.contentfulProjects.body.json,
                  options
                )}
                <Link to={"/projects"} className='button-blue'>
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

export default Projects
