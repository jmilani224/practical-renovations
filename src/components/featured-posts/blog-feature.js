import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading } from "@chakra-ui/core"
import BlogCard from "./blog-card"
import theme from '../../themes/theme.js'
import { Heading2Alt } from "../elements"

const BlogFeature = () => {
  const data = useStaticQuery(graphql`
  {
    prismic {
      allBlog_posts {
        edges {
          node {
            blog_post_title
            _meta {
              uid
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                  originalImg
                  originalName
                }
              }
            }
            blog_post_content
          }
        }
      }
    }
  }
  `)

  const arrLength = data.allMarkdownRemark.edges.length
  const blogPost1 = data.allMarkdownRemark.edges[arrLength - 3].node.frontmatter
  const blogPost2 = data.allMarkdownRemark.edges[arrLength - 2].node.frontmatter
  const blogPost3 = data.allMarkdownRemark.edges[arrLength - 1].node.frontmatter

  return (
    <>
    <Heading2Alt align="center">
      Featured Blog Posts
    </Heading2Alt>
    <Flex
    my={{base: 6, lg: 10}}
    mx={4}
    justifyContent="center"
    alignItems="center"
    direction={{base: "column", lg: "row"}}
    >
      <BlogCard data={blogPost3} />
      <BlogCard data={blogPost2} />
      <BlogCard data={blogPost1} />
    </Flex>
    </>
  )
}

export default BlogFeature