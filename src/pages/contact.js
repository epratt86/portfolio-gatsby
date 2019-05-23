import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import ContactStyles from "./contact.module.scss"

const ContactPage = () => {
  const { contact, row, col } = ContactStyles
  return (
    <Layout>
      <Head
        title="Contact"
        description="Contact me to get in touch today. Fill out the form to leave a message or give me a call. 619-453-8306"
      />
      <div className={contact}>
        <div className="container">
          <div className={row}>
            <div className={col}>
              <h1>Page Coming Soon</h1>
              <h3>Email: eric@epratt.net</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
