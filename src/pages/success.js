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
          height: "80vh",
          background: "#eee",
          color: "#333",
          fontFamily: "Roboto Mono",
          paddingTop: "10rem",
        }}
      >
        <div className="container">
          <div className="row flex-column align-items-center justify-content-center">
            <h1 className="text-center">Success</h1>
            <div className="bottom-line" />
            <h4 className="text-center">Thank you for your interest</h4>
            <p className="mt-5">
              I will be getting in contact with you soon. Cheers!
            </p>
            <p>- Eric Pratt</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Success
