import React from "react"
import Stats from "../components/stats"
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
    <div>
      <section id={intro}>
        <div className="container">
          <div className="row">
            <div className={introStyles.header}>
              <h1 className="text-center display-3">
                Eric Pratt
                <span className={introStyles.second}>Web Developer</span>
              </h1>
              <div className="bottom-line my-3" />
              <h3 className="text-center">
                Based out of San Diego, California
              </h3>
              <h4 className="text-center">
                Specializing in custom design that is mobile responsive & user
                friendly
              </h4>
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
                  application will functions with a clear goal in mind. Find out
                  what the main call to action is going to be and build the site
                  around that intention.
                </p>
              </div>
              <div>
                <FaDesktop />
                <h3>UI/UX</h3>
                <p>
                  I provide the user with a clean application that loads quickly
                  (important!) and looks great. Doesn't matter if the user is
                  viewing on their desktop, laptop, tablet, phone, whatever! The
                  user experience is important for getting potential customers
                  to stick around.
                </p>
              </div>
              <div>
                <FaObjectUngroup />
                <h3>Visual Design</h3>
                <p>
                  Let's face it, your website is crucial for influencing how
                  customers view your brand identity. A professional look is
                  critical when customers are shopping you and your competitors.
                  A solid search engine optimization (SEO) protocol will make
                  sure your site is found in the first place.
                </p>
              </div>
              <div>
                <FaThumbsUp />
                <h3>Content Management</h3>
                <p>
                  Once your site is created and on the web, I will show you how
                  to update any content you wish without having to know ANY
                  code. Future problem solved! <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Stats />
    </div>
  )
}

export default Intro
