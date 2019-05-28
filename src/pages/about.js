import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Skills from "../components/skills"
import seated from "../img/seated.jpg"
import { FaAward } from "react-icons/fa"

import AboutStyles from "./about.module.scss"

const AboutPage = () => {
  const { about, info } = AboutStyles
  return (
    <Layout>
      <Head
        title="About"
        description="Learn a little bit about me. My name is Eric and I'm a web developer. When I'm not behind a computer, you can usually find me out in the ocean. Drop me line to learn more."
      />
      <div className={about}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center display-4">Eric Pratt</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-4">Web Developer</h4>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <img className="img-fluid" src={seated} alt="Eric Pratt" />
            </div>
            <div className="col-lg-8">
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
            <div className="col-lg-4">
              <FaAward />
              <h3>The Complete Web Developer</h3>
              <p>
                Andrei Neagoie, Senior Software Developer turned instructor
                teaches the fundamentals of becoming a Full Stack Developer in
                2019. His course features HTML, CSS, React, Node.js, Machine
                Learning & More.
              </p>
            </div>
            <div className="col-lg-4">
              <FaAward />
              <h3>The Complete Node.js Developer</h3>
              <p>
                Andrew Mead covers all of the fundamentals of Node before diving
                deep into great tools like Express, Mongoose, and MongoDB. Build
                several Full Stack applications based off of REST API and learn
                how to test with Mocha.
              </p>
            </div>
            <div className="col-lg-4">
              <FaAward />
              <h3>Modern JavaScript From The Beginning</h3>
              <p>
                Brad Traversy goes deep into Javascript to teach everything from
                the basics and fundamentals, DOM Manipulation, Object Oriented
                Programming, AJAX, ES6 and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </Layout>
  )
}

export default AboutPage
