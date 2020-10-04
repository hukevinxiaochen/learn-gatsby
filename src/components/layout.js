import React from "react"
import NavBar from "./nav-bar"

/* CSS Modules */
import layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <NavBar />
      {children}
    </div>
  )
}
