import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styles from "./projects.module.scss"

const Project = props => {
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image
          fluid={props.cardImage.fluid}
          alt={props.title}
          className={styles.img}
        />
        <Link to={`/projects/${props.slug}`} className={styles.link}>
          More Info
        </Link>
      </div>

      <div className={styles.footer}>
        <div className={styles.text}>
          <p>Client: {props.title}</p>
          <p>Category: {props.category}</p>
        </div>
        <div>
          <a href={props.projectUrl} target='_blank' rel='noopener noreferrer'>
            View Online
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
