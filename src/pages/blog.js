import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { Heading1, Heading2, BlogTags } from '../components/elements.js'
import { Flex, Text, PseudoBox } from '@chakra-ui/core'
import theme from '../themes/theme.js'
import { dateConverter } from '../utils/date-converter.js'
import { RichText } from 'prismic-reactjs'

const Blog = () => {
    const data = useStaticQuery(graphql`
    {
      prismic {
        allBlog_posts(sortBy: meta_lastPublicationDate_DESC) {
          edges {
            node {
              blog_post_title
              _meta {
                uid
              }
              tags {
                select_a_tag
              }
              publish_date
            }
          }
        }
      }
    }
  `)
  const postArr = data.prismic.allBlog_posts.edges
    return (
        <>
        <Layout
        title="Blog"
        description="Find tips, tricks, and DIY guides to home renovation projects in Cleveland, Ohio."
        >
            <Heading1 align="center" pt={true}>
                Blog
            </Heading1>

            <Flex
            justifyContent="flex-start"
            mx={{base: 10, md: 24}}
            mb={10}
            direction="column"
            >
                {postArr[0] ? postArr.map(post => (
                    <BlogDateAndTitle key={post} post={post} />
                )) : <Text textAlign="center" >Nothing to read yet, check back soon.</Text>}
            </Flex>
        </Layout>
        </>
    )
}

export default Blog

const BlogDateAndTitle = ({ post }) => {
    return (
        <Link to={"blog/" + post.node._meta.uid}>
            <PseudoBox
            _hover={{background: theme.mainGray}}
            >
                <Flex
                direction={{base: "column", md: "row"}}
                >
                  <Flex
                  direction="column"
                  px={4}
                  pt={4}
                  pb={{base: 0, md: 4}}
                  >
                      <Text
                      color={theme.lightTextColor}
                      fontWeight="600"
                      >
                          {dateConverter(post.node.publish_date)}
                      </Text>
                      <Heading2>
                          {RichText.asText(post.node.blog_post_title)}
                      </Heading2>
                  </Flex>
                  <Flex
                  alignItems={{base: "flex-start", md: "center"}}
                  justifyContent={{base: "flex-start", md: "flex-end"}}
                  flexGrow="2"
                  mr={10}
                  pl={{base: 4, md: 0}}
                  >
                    {post.node.tags.map(tag => (
                      <BlogTags key={tag.select_a_tag} tag={tag.select_a_tag} />
                    ))}
                  </Flex>
                </Flex>
            </PseudoBox>
        </Link>
    )
}



