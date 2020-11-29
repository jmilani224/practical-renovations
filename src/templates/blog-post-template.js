import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import { Heading1, LongFormText, Heading2, BlogTags } from '../components/elements'
import {
  Box,
  Grid,
  Divider,
  Flex,
  Text
} from '@chakra-ui/core'
import theme from '../themes/theme'
import DrawerForm from '../components/drawer-form'
import { dateConverter } from '../utils/date-converter.js'
import { FixedImageHandler } from '../utils/imageHandlers'
import AboutJesse from '../components/about-jesse.js'
import { Disqus } from 'gatsby-plugin-disqus';

const BlogTemplate = ({ data }) => {
  
    if (!data) return null //validation check - without this, the build was failing on a /test/ path, who can say why?
    const doc = data.prismic.allBlog_posts.edges[0];
    if (!doc) return null //validation check - recommended by Prismic to prevent a build error when previews are on
    
    const metaData = {
      title: doc.node.page_title && RichText.asText(doc.node.page_title),
      desc: doc.node.meta_description && RichText.asText(doc.node.meta_description),
    }

    return (
        <>
        <Layout
        title={metaData.title}
        description={metaData.desc}
        >
            <Grid
            gridTemplateColumns={{base: "100%",lg: "1fr 0fr minmax(200px, 25%)"}}
            >
                <Box
                px={{base: 4, md: 24}}
                pb={10}
                >
                
                    <Heading1 align="center" pt={true}>
                        {RichText.asText(doc.node.blog_post_title)}
                    </Heading1>
                    <Box mb={4} w="100%" h="500px">
                      <FixedImageHandler
                      fixed={doc.node.hero_imageSharp ? doc.node.hero_imageSharp.childImageSharp.fixed : null}
                      fallbackImage={doc.node.hero_image ? doc.node.hero_image.url : null}
                      alt={doc.node.hero_image ? doc.node.hero_image.alt : null}
                      />
                    </Box>
                    <LongFormText>
                      {RichText.render(doc.node.blog_post_content)}
                    </LongFormText>
                    <Disqus
                      config={{
                          url: `https://practicalreno.com/blog/${doc.node._meta.uid}`,
                          identifier: doc.node._meta.uid,
                          title: doc.node.blog_post_title,
                      }}
                    />
                </Box>

                <Box
                display={{base: "none", lg: "flex"}}
                >
                  <Divider
                  orientation="vertical"
                  my={8}
                  />
                </Box>
                <Flex
                display={{base: "flex", lg: "none"}}
                justifyContent="center"
                >
                  <Divider
                  orientation="horizontal"
                  w="90%"
                  />
                </Flex>
                <Flex
                direction="column"
                >
                    <SideBarVerticalSpace />
                    <SideBarVerticalSpace />
                    

                    <AboutJesse />
                    <Flex
                    direction="column"
                    pl={6}
                    >
                    

                        <SideBarVerticalSpace>

                            <Heading2>
                                Published
                            </Heading2>
                            <Text
                            color={theme.lightTextColor}
                            fontWeight="600"
                            >
                                {dateConverter(doc.node.publish_date)}
                            </Text>
                        </SideBarVerticalSpace>

                        <SideBarVerticalSpace>

                            <Heading2>
                                Tags
                            </Heading2>
                            {doc.node.tags.map(tag => (
                              <BlogTags key={tag.select_a_tag} tag={tag.select_a_tag} />
                            ))}
                            
                        </SideBarVerticalSpace>


                            <Heading2>
                                Contact
                            </Heading2>
                            <SidebarText>
                                Have a project in mind? Let's bring it to life.
                            </SidebarText>
                            <Box w={10}>
                                <DrawerForm buttonMargin="1.5rem 0 1rem 0" />
                            </Box>
                    </Flex>
                </Flex>
            </Grid>
        </Layout>
      </>
    )
}

export default BlogTemplate


export const SidebarText = ({ children }) => {
    return (
        <Text
        fontSize="0.9rem"
        pr={6}
        >
            {children}
        </Text>
    )
}

export const SideBarVerticalSpace = ({ children }) => ( <Box mb={10}>{children}</Box> )

export const query = graphql`
  query BlogPageQuery($uid: String) {
    prismic {
      allBlog_posts(uid: $uid) {
        edges {
          node {
            page_title
            blog_post_title
            _meta {
              uid
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
              }
              }
            }
            meta_description
            publish_date
            tags {
              select_a_tag
            }
            blog_post_content
          }
        }
      }
    }
  }
`
