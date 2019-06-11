import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head
        title="Page Not Found"
        description="Sorry but this page was not found. Please contact me with any questions."
      />
      <section
        style={{
          paddingTop: "10rem",
          color: "#333",
          background: "#eee",
          fontFamily: "Roboto Mono",
          minHeight: "80vh",
        }}
        id="404"
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center display-4">404</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-4">Page not found</h4>
              <p>Sorry, I could not find the page you were looking for.</p>
              <Link to="/" className="btn btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound
