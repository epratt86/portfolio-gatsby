import React from "react"

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "2rem 0",
        fontFamily: "Roboto Mono",
        background: "#ccc",
      }}
    >
      <div className="container">
        <div className="display-4 text-center mb-3">Technical Skills</div>
        <h4>HTML5 - Semantic</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>CSS3 - w/ SASS</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "90%" }}
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>JavaScript - es6+</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>Bootstrap 4</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "100%" }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>Node.js</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>React</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "70%" }}
            aria-valuenow="70"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        <h4>MongoDB</h4>
        <div className="progress mb-3">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
