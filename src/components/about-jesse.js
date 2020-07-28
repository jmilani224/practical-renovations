import React from 'react'
import { Flex, Avatar, Box } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { SideBarVerticalSpace, SidebarText } from '../templates/blog-post-template.js'
import { RichText } from 'prismic-reactjs'

const AboutJesse = () => {

    const data = useStaticQuery(graphql`
        {
        prismic {
            allFragmentss {
            edges {
                node {
                blog_bio_blurb
                }
            }
            }
        }
        }
    `)

    return (
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
                maxW="30rem"
                mt={4}
                >
                {RichText.render(data.prismic.allFragmentss.edges[0].node.blog_bio_blurb)}
                </Box>
            </SidebarText>
        </SideBarVerticalSpace>
    </Flex>
    )}

    export default AboutJesse