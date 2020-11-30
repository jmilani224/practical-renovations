import React from 'react'
import { Flex, Avatar, Box } from '@chakra-ui/core'
import { useStaticQuery, graphql } from 'gatsby'
import { SideBarVerticalSpace, SidebarText } from '../templates/blog-post-template.js'
import { RichText } from 'prismic-reactjs'
import avi from '../images/avi.jpg'

const AboutJesse = ({ textAlign }) => {

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
        <Avatar name="Jesse Carter" src={avi} size="2xl" />
        <SideBarVerticalSpace>
            <SidebarText>
                <Box
                pl={6}
                maxW="30rem"
                mt={4}
                textAlign={textAlign}
                >
                {RichText.render(data.prismic.allFragmentss.edges[0].node.blog_bio_blurb)}
                </Box>
            </SidebarText>
        </SideBarVerticalSpace>
    </Flex>
    )}

    export default AboutJesse