import React from "react"

import introStyles from "./intro.module.scss"

const Intro = () => {
  const { intro } = introStyles

  return (
    <section id={intro}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>This is the intro</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
