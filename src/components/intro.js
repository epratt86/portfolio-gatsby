import React from "react"
import {
  FaFileAlt,
  FaObjectUngroup,
  FaThumbsUp,
  FaDesktop,
} from "react-icons/fa"

import introStyles from "./intro.module.scss"

const Intro = () => {
  const { intro, specials } = introStyles

  return (
    <section id={intro}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5">Web Developer</h1>
            <div className="bottom-line" />
            <p className="text-center">
              Specializing in custom design thats mobile & user friendly
            </p>
          </div>
        </div>
        <div className="row">
          <div className={specials}>
            <div>
              <FaFileAlt />
              <h3>Concepting</h3>
              <p>
                The work starts before a single line of code is written. First
                things first, come up with a concept of how the site or
                application will functions with a clear goal in mind.
              </p>
            </div>
            <div>
              <FaDesktop />
              <h3>UI/UX</h3>
              <p>
                I provide the user with a clean application that loads quickly
                and looks great from whatever device they may have in front of
                them.
              </p>
            </div>
            <div>
              <FaObjectUngroup />
              <h3>Visual Design</h3>
              <p>
                Let's face it, your website is crucial for influencing how
                customers view your brand identity. A professional look is
                critical when customers are shopping you and your competitors.
              </p>
            </div>
            <div>
              <FaThumbsUp />
              <h3>Content Management</h3>
              <p>
                Once your site is created and on the web, I will show you how to
                update any content you wish without having to know ANY code.
                Future problem solved!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
