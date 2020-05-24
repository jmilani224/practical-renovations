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
            }
          }
        }
      }
    }
  `)

  const blogPost1 = data.allMarkdownRemark.edges[0].node
  const blogPost2 = data.allMarkdownRemark.edges[1].node
  return (
    <>
    <Stack>
      <BlogCard title={blogPost1.frontmatter.title} desc={blogPost1.frontmatter.desc} href={blogPost1.frontmatter.href} />
      <BlogCard title={blogPost2.frontmatter.title} desc={blogPost2.frontmatter.desc} href={blogPost2.frontmatter.href} />
    </Stack>
    </>
  )
}

export default BlogFeature