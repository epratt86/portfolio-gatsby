import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import WorkStyles from "./work.module.scss"

const WorkPage = () => {
  const { work } = WorkStyles
  return (
    <Layout>
      <Head
        title="Work"
        description="A collection of work from Eric Pratt. Check out past project to get inspired for your next creation."
      />
      <div className={work}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4 text-center">Work</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-4">
                Check out some of my previous projects
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h5 className="text-center">
                This page is currently in the works... check back soon for new
                content
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WorkPage
