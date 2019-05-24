import React from "react"
import Head from "../components/head"
import { Link } from "gatsby"
import { FaCode } from "react-icons/fa"
import { IconContext } from "react-icons"
import _ from "lodash.throttle"
import navStyles from "./Nav.module.scss"

// Nav background on scroll - throttled w/ lodash
try {
  window.addEventListener(
    "scroll",
    _(() => {
      if (window.scrollY > 200) {
        document
          .querySelector("header")
          .setAttribute("style", "background: #000; opacity: 0.7")
      } else {
        document
          .querySelector("header")
          .setAttribute("style", "background: transparent")
      }
    }, 300)
  )
} catch (err) {
  console.log("error message: ", err)
}

const Nav = () => {
  const { header, brand, nav, activeNavItem } = navStyles
  return (
    <header className={header}>
      <Head />
      <div className={brand}>
        <Link to="/">
          <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
            <h2>
              <FaCode />e<span>Pratt</span>
            </h2>
          </IconContext.Provider>
        </Link>
      </div>
      <nav className={nav}>
        <ul>
          <Link to="/" activeClassName={activeNavItem}>
            <li>Home</li>
          </Link>
          <Link to="/work" activeClassName={activeNavItem}>
            <li>Work</li>
          </Link>
          <Link to="/about" activeClassName={activeNavItem}>
            <li>About</li>
          </Link>
          <Link to="/blog" activeClassName={activeNavItem}>
            <li>Blog</li>
          </Link>
          <Link to="/contact" activeClassName={activeNavItem}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
