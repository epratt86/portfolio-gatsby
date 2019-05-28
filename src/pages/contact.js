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
                className="py-5"
                data-netlify="true"
                data-netlify-recaptcha="true"
              >
                <div className={textFields}>
                  <input
                    type="text"
                    className={name}
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    type="text"
                    className={subject}
                    placeholder="Subjects"
                    name="subject"
                  />
                  <input
                    type="email"
                    className={email}
                    placeholder="Email Address"
                    name="email"
                  />
                  <input
                    type="text"
                    className={phone}
                    placeholder="Phone Number"
                    name="phone"
                  />
                  <textarea
                    className={message}
                    placeholder="Enter Message"
                    name="message"
                  />
                  <div className="my-1">
                    <div data-netlify-recaptcha="true" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ background: "#ccc", fontFamily: "Roboto Mono", color: "#333" }}
      >
        <div className="container">
          <div className="row">
            <h2 className="text-center display-2 my-5">
              Let's get started on your next project.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
