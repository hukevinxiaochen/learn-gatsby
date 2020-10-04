import React from "react"
import layoutStyles from "./layout.module.css"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
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
    <div className={layoutStyles.layout}>
      <Link to={`/`}>
        <h3>{data.site.siteMetadata.title}</h3>
      </Link>
      {children}
    </div>
  )
}
