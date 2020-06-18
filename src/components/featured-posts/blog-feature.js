import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading } from "@chakra-ui/core"
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

  const arrLength = data.allMarkdownRemark.edges.length
  const blogPost1 = data.allMarkdownRemark.edges[arrLength - 3].node.frontmatter
  const blogPost2 = data.allMarkdownRemark.edges[arrLength - 2].node.frontmatter
  const blogPost3 = data.allMarkdownRemark.edges[arrLength - 1].node.frontmatter

  return (
    <>
    <Heading
    as="h2"
    fontSize="4xl"
    textAlign="center"
    fontWeight="00"
    mt={6}
    >
      Featured Blog Posts
    </Heading>
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