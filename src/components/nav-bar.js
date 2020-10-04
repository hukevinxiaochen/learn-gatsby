import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

/* CSS Modules */
import layoutStyles from "./layout.module.css"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.navbar}>
      <p>{data.site.siteMetadata.title}</p>
      <span>You are not logged in</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/">Profile</Link>
        {` `}
        <Link to="/">Logout</Link>
      </nav>
    </div>
  )
}
