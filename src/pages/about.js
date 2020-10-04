import React from "react"
import Layout from "../components/layout"

export default function About({data}) {
  return (
    <Layout>
      <h1>About</h1>
      <p>Such wow. Very React.</p>
    </Layout>
  )
}

// import { graphql } from "gatsby"
/* Page query */
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
