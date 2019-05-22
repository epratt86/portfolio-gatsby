import React from "react"
import { Link } from "gatsby"
import NavStyles from "./Nav.module.scss"

const Nav = () => {
  return (
    <nav className="container">
      <div className={NavStyles.brand}>
        <Link to="/">
          <h2>ePratt | Dev</h2>
        </Link>
      </div>
      <ul>
        <Link>
          <li>Work</li>
        </Link>
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Blog</li>
        </Link>
        <Link>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav
