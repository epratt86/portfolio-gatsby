import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Landing from "../components/landing"
import Intro from "../components/intro"

const IndexPage = () => {
  return (
    <Layout>
      <Head
        title="Welcome"
        description="Welcome to ePratt.net. This is the personal portfolio site for Eric Pratt. Eric Pratt is a web developer based out of San Diego, California"
      />
      <Landing />
      <Intro />
    </Layout>
  )
}

export default IndexPage
