import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Travis build finally passed</h1>
      <Link to="/about">About</Link>
    </Layout>
  )
}
