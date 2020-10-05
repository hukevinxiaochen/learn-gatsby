/* CREATE PAGES from Markdown Files */
const path = require("path")
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
  const { createPage } = actions
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
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/note.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    })
  })
}

// recreate pages that have a particular path
exports.onCreatePage = async ({page, actions}) => {
  const { createPage } = actions

  // page.matchPath is a special key used for matching pages
  // on the client side
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}
// The above code (as well as the gatsby-plugin-create-client-paths plugin) updates the /app page at build time to add the matchPath parameter in the page object to make it so that the configured pages (in this case, everything after /app, like /app/dashboard or /app/user) can be navigated to by Reach Router.

// Without this configuration set up, a user that clicks on a link to <yoursite.com>/app/user will instead be routed to the static /app page instead of the component or page you have set up at /app/user.
