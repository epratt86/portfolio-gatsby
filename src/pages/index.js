import React from "react"
import Typing from "react-typing-animation"
import Head from "../components/head"
import Layout from "../components/layout"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  const { indexPage, overlay, row, col } = indexStyles

  return (
    <Layout>
      <section id={indexPage}>
        <Head
          title="Welcome"
          description="Welcome to ePratt.net. This is the personal portfolio site for Eric Pratt. Eric Pratt is a web developer based out of San Diego, California"
        />
        <div className={overlay}>
          <div className="container">
            <div className={row}>
              <div className={col} />
              <div className={col}>
                <Typing hideCursor="true">
                  <div>
                    <Typing.Speed ms={30} />
                    <h1> welcome to my portfolio. </h1>
                    <Typing.Delay ms={1000} />
                    <Typing.Speed ms={30} />
                    <h3> home to past work and some of my thoughts. </h3>
                    <Typing.Delay ms={500} />
                    <Typing.Speed ms={30} />
                    <h5>take a look into my life... </h5>
                    <Typing.Delay ms={500} />
                    <Typing.Speed ms={1} />
                    <p>- eric</p>
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
