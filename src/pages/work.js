import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import WorkStyles from "./work.module.scss"

const WorkPage = () => {
  const { work, row, col } = WorkStyles
  return (
    <Layout>
      <Head
        title="Work"
        description="A collection of work from Eric Pratt. Check out past project to get inspired for your next creation."
      />
      <div className={work}>
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

export default WorkPage
