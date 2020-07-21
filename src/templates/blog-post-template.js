import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'
import { Heading1, LongFormText, Heading2, BlogTags } from '../components/elements'
import { Box, Grid, Divider, Avatar, Flex, Text } from '@chakra-ui/core'
import theme from '../themes/theme'
import DrawerForm from '../components/drawer-form'
import { dateConverter } from '../utils/date-converter.js'
import { FixedImageHandler } from '../utils/imageHandlers'
import MetaData from '../components/meta-data.js'

const BlogTemplate = ({ data }) => {
    if (!data) return null //validation check - without this, the build was failing on a /test/ path, who can say why?
    const doc = data.prismic.allBlog_posts.edges.slice(0, 1).pop();
    if (!doc) return null //validation check - recommended by Prismic to prevent a build error when previews are on
    return (
        <>
        <MetaData
        title={doc.node.page_title ? RichText.asText(doc.node.page_title) : ''}
        description={doc.node.meta_description ? RichText.asText(doc.node.meta_description) : ''}
        />
        <Layout>
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
                </Box>
                <Divider
                orientation="vertical"
                my={8}
                />
                <Flex
                direction="column"
                >
                    <SideBarVerticalSpace />
                    <SideBarVerticalSpace />
                    

                    <Flex
                    direction="column"
                    w="100%"
                    alignItems="center"
                    >
                        <Avatar name="Jesse Carter" src="https://scontent-mia3-1.cdninstagram.com/v/t51.2885-19/s320x320/109026022_578692232814312_5935269997174878413_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_ohc=JtbO3LaiWEMAX86moSF&oh=93a3141164ca934381384fb10e5a74b2&oe=5F41A6F7" size="2xl" />
                        <SideBarVerticalSpace>
                            <SidebarText>
                                <Box
                                pl={6}
                                maxW="25rem"
                                mt={4}
                                >
                                Hi, I'm Jesse Carter, owner and operator of Practical Renovations LLC. Here's a little bit about what I want to do with this blog: write Twilight fan fiction, make grocery lists, and invent a new kind of math but instead of numbers it's all emojis. 🧮
                                </Box>
                            </SidebarText>
                        </SideBarVerticalSpace>
                    </Flex>
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
                              <BlogTags tag={tag.select_a_tag} />
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


const SidebarText = ({ children }) => {
    return (
        <Text
        fontSize="0.9rem"
        pr={6}
        >
            {children}
        </Text>
    )
}

const SideBarVerticalSpace = ({ children }) => ( <Box mb={10}>{children}</Box> )

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
                  base64
                  tracedSVG
                  aspectRatio
                  srcWebp
                  srcSetWebp
                  originalName
                  src
                  srcSet
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