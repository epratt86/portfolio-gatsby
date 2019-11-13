import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import ContactStyles from "./contact.module.scss"

const ContactPage = () => {
  const {
    contact,
    textFields,
    name,
    subject,
    phone,
    email,
    message,
  } = ContactStyles
  return (
    <Layout>
      <Head
        title="Contact"
        description="Contact me to get in touch today. Fill out the form to leave a message or give me a call at 619-453-8306"
      />
      <section className={contact}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-4 text-center">Contact</h1>
              <div className="bottom-line" />
              <h4 className="text-center mb-4">
                Fill out form to get in touch
              </h4>
              <form
                name="contact"
                method="POST"
                action="/success"
                className="py-5"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className={ContactStyles.form}
              >
                <div className={textFields}>
                  <input
                    type="text"
                    className={name}
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    type="text"
                    className={subject}
                    placeholder="Subject"
                    name="subject"
                  />
                  <input
                    type="email"
                    className={email}
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                  <input
                    type="text"
                    className={phone}
                    placeholder="Phone Number"
                    name="phone"
                  />
                  <input type="hidden" name="form-name" value="contact" />
                  <textarea
                    className={message}
                    placeholder="Enter Message"
                    name="message"
                    required
                  />
                </div>
                <button type="submit" className="button-blue">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          background: "#0496ec",
          fontFamily: "Roboto Mono",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <h2 className="text-center display-5 w-100 my-5">
              Let's get started on your next project.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
