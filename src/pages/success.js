import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const Success = () => {
  return (
    <Layout>
      <Head
        title='Success'
        description='Thank you for your interest. I will be in contact with you shortly - Eric Pratt'
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
        <div className='container'>
          <div className='row flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Success</h1>
            <div className='bottom-line' />
            <article
              style={{
                background: "#ffffff",
                boxShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
                maxWidth: "95vw",
                width: "100%",
                padding: "1rem",
              }}
            >
              <p>Your form has successfully been submitted.</p>
              <br />
              <p>I will be getting in contact with you soon</p>
              <p style={{ textAlign: "right" }}>- Eric Pratt</p>
              <Link to='/' className='button-blue'>
                Return Home
              </Link>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Success
