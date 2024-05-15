const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.template === `blogpost`) {
      slug = `/blog${slug}`
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.frontmatter.template}.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = function({stage, getConfig, rules, loaders, plugins, actions}) {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: false,
        process: false,
      }
    }
  })
}