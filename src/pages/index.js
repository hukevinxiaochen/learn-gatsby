import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export const data = graphql`
  query {
    allSitePage {
      edges {
        node {
          path
          internalComponentName
          id
        }
      }
    }
  }
`

function sortPages(pageNode1, pageNode2) {
  if (pageNode1.node.path.length < pageNode2.node.path.length) return -1
  if (pageNode1.node.path.length > pageNode2.node.path.length) return 1
  return 0
}

export default function Home({ data }) {
  data.allSitePage.edges.sort(sortPages)
  const pages = data.allSitePage.edges.filter((n) => n.node.path !== '/')
  return (
    <Layout>
      <h1>Travis build finally passed</h1>
      <ul>
        {pages.map(n => (
          <li key={n.node.id}>
            <Link to={n.node.path}>{n.node.internalComponentName.slice(9)}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
