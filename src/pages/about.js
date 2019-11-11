import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Head from "../components/head"
import Skills from "../components/skills"
import Courses from "../components/Courses/Courses"

import AboutStyles from "./about.module.scss"

const AboutPage = ({ data }) => {
  const { about, info } = AboutStyles
  return (
    <Layout>
      <Head
        title="About"
        description="Learn more about me, Eric Pratt, right here. Check out my about page to find out more about my interests and my work."
      />
      <div className={about}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center display-4">About Me</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-4">
                Web Developer | Problem Solver
              </h4>
            </div>
          </div>
          <div className={AboutStyles.bio}>
            <div className={AboutStyles.image}>
              <Image fluid={data.eric.childImageSharp.fluid} />
            </div>
            <div>
              <div className={info}>
                <h4 className="text-uppercase text-center my-3">
                  Your Project is in Safe Hands
                </h4>
                <p>
                  Hi, my name is Eric Pratt and I am a web developer based out
                  of San Diego, California. I enjoy working with a variety of
                  clients who are as passionate about their business as I am
                  mine. It's my goal to provide everyone I work with the highest
                  quality website or application no matter how large or small
                  the job.
                </p>
                <p>
                  When I'm not behind the screen you can find me out in the
                  lineup anywhere from Baja to Cardiff. If you have any
                  questions about how I may be able to help, don't hesitate to
                  ask!
                </p>
              </div>
            </div>
          </div>
          <div className="row text-center my-4">
            <Courses />
          </div>
        </div>
      </div>
      <Skills />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query {
    eric: file(relativePath: { eq: "img/eric-pratt.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
