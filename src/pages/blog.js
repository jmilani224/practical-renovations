import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from '../components/layout'
import { Heading1, Heading2 } from '../components/elements.js'
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
            mx={24}
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
                direction="column"
                p={4}
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
            </PseudoBox>
        </Link>
    )
}



