import React from "react"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./projects.module.scss"

const query = graphql`
  {
    allContentfulProjects(sort: { fields: completed, order: DESC }) {
      nodes {
        title
        slug
        category
        id
        projectUrl
        body {
          json
        }
        cardImage {
          fluid(maxWidth: 1100) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Projects = () => {
  const {
    allContentfulProjects: { nodes: projects },
  } = useStaticQuery(query)

  return (
    <section className={styles.projects}>
      <div className='container'>
        <div className={styles.grid}>
          {projects.map(item => {
            return <Project key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
