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

  const blogPost1 = data.allMarkdownRemark.edges[0].node.frontmatter
  const blogPost2 = data.allMarkdownRemark.edges[1].node.frontmatter
  const blogPost3 = data.allMarkdownRemark.edges[2].node.frontmatter
  return (
    <>
    <Heading
    as="h2"
    fontSize="4xl"
    textAlign="center"
    mt={6}
    >
      Featured Blog Posts
    </Heading>
    <Flex
    my={10}
    mx={4}
    justifyContent="space-evenly"
    alignItems="center"
    >
      <BlogCard data={blogPost1} />
      <BlogCard data={blogPost2} />
      <BlogCard data={blogPost3} />
    </Flex>
    </>
  )
}

export default BlogFeature