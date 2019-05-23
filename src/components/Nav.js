import React from "react"
import Head from "../components/head"
import { Link } from "gatsby"
import NavStyles from "./Nav.module.scss"

const Nav = () => {
  const { header, brand, nav, activeNavItem } = NavStyles
  return (
    <header className={header}>
      <Head />
      <div className={brand}>
        <Link to="/">
          <h2>
            eric<span>Pratt</span> | Dev
          </h2>
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
