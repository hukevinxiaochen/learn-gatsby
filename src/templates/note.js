import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Note({ data }) {
  const note = data.markdownRemark
  return (
    <Layout>
      <h1>{note.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: note.html }}></div>
      <p>A note rendered from markdown</p>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
