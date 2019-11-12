import React from "react"
import { Link } from "gatsby"
import landingStyles from "./landing.module.scss"

const Landing = () => {
  const { landing, overlay } = landingStyles
  return (
    <section id={landing}>
      <div className={overlay}>
        <div className="container">
          <div className={landingStyles.header}>
            <div></div>
            <div className={landingStyles.intro}>
              <h3>
                Welcome to my portfolio. Take a look around to see past
                projects, courses, blog posts and more.
              </h3>
              <Link to="/contact" className="button" title="contact">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
