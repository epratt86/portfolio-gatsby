import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        background: "#000",
        color: "#eee",
        padding: "3rem 0",
        fontFamily: "Roboto Mono",
      }}
    >
      <div className="container">
        <div className="row d-flex flex-column">
          <div className="col text-center">
            <a
              href="https://www.github.com/epratt86"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-pratt"
              target="_blank"
              title="Linkedin"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="col text-center mt-3">
            <p>Copyright © {year} epratt.net. All rights reserved</p>
            <p>
              This site was built using&nbsp;
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#0496ec" }}
              >
                Gatsby
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
