import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        background: "#000",
        color: "#545454",
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
              style={{
                marginRight: "1rem",
                color: "#0496ec",
                fontSize: "2rem",
              }}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/eric-pratt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0496ec", fontSize: "2rem" }}
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="col text-center mt-3">
            <p>Copyright © {year} epratt.net. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
