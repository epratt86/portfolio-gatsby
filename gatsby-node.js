const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // get path to template
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const projectsTemplate = path.resolve("./src/templates/projects.js")
  // query to grab slug from contentful
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // create new pages based off slug above
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  res.data.allContentfulProjects.edges.forEach(edge => {
    createPage({
      component: projectsTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
