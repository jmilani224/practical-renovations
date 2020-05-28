import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Stack } from "@chakra-ui/core"
import BlogCard from "./blog-card"

const BlogFeature = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              author
              date
              path
              title
              desc
              main_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const blogPost1 = data.allMarkdownRemark.edges[0].node.frontmatter
  const blogPost2 = data.allMarkdownRemark.edges[1].node.frontmatter
  return (
    <>
    <Stack>
      <BlogCard data={blogPost1} />
      <BlogCard data={blogPost2} />
    </Stack>
    </>
  )
}

export default BlogFeature