import React from "react"
import Course from "./Course"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./courses.module.scss"

const query = graphql`
  {
    allContentfulCourses(sort: { fields: completed, order: DESC }) {
      nodes {
        title
        url
        hours
        completed
        id
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const Courses = () => {
  const {
    allContentfulCourses: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <div className="container">
        <h4 className="display-4 mb-4">Completed Courses</h4>
        <div className={styles.grid}>
          {courses.map(item => {
            return <Course key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Courses
