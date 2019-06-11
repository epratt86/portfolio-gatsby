import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Landing from "../components/landing"
import Intro from "../components/intro"

const IndexPage = () => {
  return (
    <Layout>
      <Head
        title="Home"
        description="Welcome to ePratt.net. Discover the personal portfolio site for Eric Pratt. I'm a web developer based out of San Diego, California. Don't forget to take a look around and then visit the contact page to leave me a message."
      />
      <Landing />
      <Intro />
    </Layout>
  )
}

export default IndexPage
