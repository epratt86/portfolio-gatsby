import React from "react"
import Head from "../components/head"
import { Link } from "gatsby"
import { FaCode } from "react-icons/fa"
import { IconContext } from "react-icons"
import navStyles from "./Nav.module.scss"

const Nav = () => {
  const { header, brand, nav, activeNavItem, contactLink } = navStyles

  function throttle(fn, wait) {
    var time = Date.now()
    return function() {
      if (time + wait - Date.now() < 0) {
        fn()
        time = Date.now()
      }
    }
  }

  if (window.document !== "undefined") {
    const changeOpacity = () => {
      if (window.scrollY > 400) {
        document.querySelector("#navbar").style.opacity = 0.6
      } else {
        document.querySelector("#navbar").style.opacity = 1
      }
    }

    const removeLogo = () => {
      if (window.scrollY > 400) {
        document.querySelector("#navbar").style.opacity = 1
        document.querySelector("#brand").style.display = "none"
      } else {
        document.querySelector("#brand").style.display = "block"
      }
    }
    // Nav opacity on scroll
    window.addEventListener("scroll", throttle(changeOpacity, 300))

    // if browser is small remove logo
    if (document.body.offsetWidth < 500) {
      window.addEventListener("scroll", throttle(removeLogo, 300))
    }
  }

  return (
    <header className={header} id="navbar">
      <Head />
      <div className="container d-sm-block d-md-flex justify-content-between">
        <div className={brand} id="brand">
          <Link to="/" title="home">
            <IconContext.Provider
              value={{
                style: {
                  verticalAlign: "middle",
                  color: "#007bff",
                  fontSize: "2rem",
                  marginRight: ".5rem",
                },
              }}
            >
              <FaCode />
              <h2>Eric Pratt</h2>
            </IconContext.Provider>
          </Link>
        </div>
        <nav className={nav}>
          <ul>
            <Link to="/" activeClassName={activeNavItem} title="home">
              <li className="mr-3">Home</li>
            </Link>
            <Link
              to="/projects"
              activeClassName={activeNavItem}
              title="projects"
            >
              <li className="mr-3">Projects</li>
            </Link>
            <Link to="/about" activeClassName={activeNavItem} title="about">
              <li className="mr-3">About</li>
            </Link>
            <Link to="/blog" activeClassName={activeNavItem} title="blog">
              <li className="mr-3">Blog</li>
            </Link>
            <Link to="/contact" activeClassName={activeNavItem} title="contact">
              <li className={contactLink}>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Nav
