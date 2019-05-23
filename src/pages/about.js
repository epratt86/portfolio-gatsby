import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import AboutStyles from "./about.module.scss"

const AboutPage = () => {
  const { about, row, col } = AboutStyles
  return (
    <Layout>
      <Head
        title="About"
        description="Learn a little bit about me. My name is Eric and I'm a web developer. When I'm not behind a computer, you can usually find me out in the ocean. Drop me line to learn more."
      />
      <div className={about}>
        <div className="container">
          <div className={row}>
            <div className={col}>
              <h1>Page Coming Soon</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
