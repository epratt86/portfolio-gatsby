import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head
        title="Page Not Found"
        description="Sorry but this page was not found. Please contact us with any questions."
      />
      <h1>Whoops! That page was not found.</h1>
      <p>
        <Link to="/">Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
