import React from "react"
import Image from "gatsby-image"
import styles from "./courses.module.scss"

const Course = ({ title, url, hours, image }) => {
  return (
    <article className={styles.course}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} alt={title} className={styles.img} />
        <a
          href={url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          enroll
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{hours} hours</p>
        </div>
      </div>
    </article>
  )
}

export default Course
