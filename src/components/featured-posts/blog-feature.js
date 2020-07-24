import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex } from "@chakra-ui/core"
import BlogCard from "./blog-card"
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
                  ...GatsbyImageSharpFluid
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

  const chooseFeaturedPosts = (arr) => arr.slice(-3).reverse()
  const featuredPostArr = chooseFeaturedPosts(data.prismic.allBlog_posts.edges)

  return (
    <>
    {featuredPostArr.length > 0 &&
    <Heading2Alt align="center">
      Featured Blog Posts
    </Heading2Alt>
    }
    <Flex
    my={{base: 6, lg: 10}}
    mx={{base: 0, lg: 4}}
    justifyContent="center"
    alignItems="center"
    direction={{base: "column", lg: "row"}}
    >
      {featuredPostArr.map(data => (
        <BlogCard data={data} />
      ))}
    </Flex>
    </>
  )
}

export default BlogFeature