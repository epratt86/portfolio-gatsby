import React from "react"
import Typing from "react-typing-animation"
import { Link } from "gatsby"
import landingStyles from "./landing.module.scss"

const Landing = () => {
  const { landing, overlay, typeContent } = landingStyles
  return (
    <section id={landing}>
      <div className={overlay}>
        <div className="container">
          <div className="row">
            <div
              id={typeContent}
              className="col d-flex flex-column justify-content-center align-items-sm-center align-items-lg-end"
            >
              <Typing hideCursor="true">
                <div className="text-white">
                  <Typing.Speed ms={30} />
                  <h1> welcome to my portfolio. </h1>
                  <Typing.Delay ms={1000} />
                  <Typing.Speed ms={20} />
                  <h5>
                    home to past work and insights <br />
                    <Typing.Delay ms={200} />
                    <Typing.Speed ms={20} />
                    take a look into my life... <br />
                    <Typing.Delay ms={100} />
                    <Typing.Speed ms={0} />
                  </h5>
                </div>
              </Typing>
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
                title="contact"
              >
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
