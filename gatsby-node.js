const path = require("path")

// create a slug based off of MD files
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // check to see if node (file) is markdown
  if (node.internal.type === "MarkdownRemark") {
    // make the slug equal the file name -md
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
