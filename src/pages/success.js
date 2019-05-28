import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const Success = () => {
  return (
    <Layout>
      <Head
        title="Success"
        description="Thank you for your interest. I will be in contact with you shortly - Eric Pratt"
      />
      <section
        style={{
          height: "100vh",
          background: "#333",
          color: "#fff",
          fontFamily: "Roboto Mono",
        }}
      >
        <div className="container">
          <div className="row">
            <h1 className="text-center">Success</h1>
            <div className="bottom-line" />
            <h4 className="text-center">Thank you for your interest</h4>
            <p>I will be getting in contact with you soon. Cheers!</p>
            <p>- Eric Pratt</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Success
