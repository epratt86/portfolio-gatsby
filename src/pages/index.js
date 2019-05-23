import React from "react"
import Typing from "react-typing-animation"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const { landing, overlay } = indexStyles

  return (
    <Layout>
      <Head
        title="Welcome"
        description="Welcome to ePratt.net. This is the personal portfolio site for Eric Pratt. Eric Pratt is a web developer based out of San Diego, California"
      />
      <section id={landing}>
        <div className={overlay}>
          <div className="container h-100">
            <div className="row h-100">
              <div className="col d-flex flex-column justify-content-center align-items-sm-center align-items-lg-end">
                <Typing hideCursor="true">
                  <div className="text-white">
                    <Typing.Speed ms={30} />
                    <h1> welcome to my portfolio. </h1>
                    <Typing.Delay ms={1000} />
                    <Typing.Speed ms={20} />
                    <h5>
                      home to past work and insights <br />
                      <Typing.Delay ms={200} />
                      <Typing.Speed ms={20} />
                      take a look into my life... <br />
                      <Typing.Delay ms={100} />
                      <Typing.Speed ms={0} />
                      <br />
                      <span className="m-2">- eric</span>
                    </h5>
                  </div>
                </Typing>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
