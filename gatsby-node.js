const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
// function called whenever Gatsby creates a new node or updates one
exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

// graphql function call returns a Promise
exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/note.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables
        slug: node.fields.slug,
      }
    })
  })
}
