import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout'
import { Heading1 } from '../components/elements'
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/core'
import theme from '../themes/theme.js'



const Services = () => {
    const data = useStaticQuery(graphql`
    {
    prismic {
        allServices_pages {
          edges {
            node {
              icon
              page_name
              section_intro
              _meta {
                uid
              }
            }
          }
        }
      }
    }
    `)
    console.log(data.prismic.allServices_pages.edges[5].node)
    return (
        <Layout>
            <Heading1>
                Services
            </Heading1>
            <Flex
            direction={{base: "column", md: "row"}}
            alignItems="center"
            justifyContent="center"
            mt={{base: 10, md: 0}}
            >
                <Box
                m={{base: 5, md: 15}}
                >
                    <Image
                    src={data.prismic.allServices_pages.edges[5].node.icon.url}
                    h={{base: "17rem", md:"13rem"}}
                    w={{base: "17rem", md:"13rem"}}

                    />
                </Box>
                <Box
                m={{base:5, md: 20}}
                w={{base: "60vw", md:"35vw"}}
                >
                    <Heading
                    as="h2"
                    fontSize="2xl"
                    mb={4}
                    >
                        {data.prismic.allServices_pages.edges[5].node.page_name[0].text}
                    </Heading>
                    <Box
                    w="3em"
                    borderBottom="3px solid"
                    borderColor={theme.buttonColor}
                    mb={4}
                    />
                    <Text>
                        {data.prismic.allServices_pages.edges[5].node.section_intro[0].text}
                    </Text>
                </Box>
            </Flex>
        </Layout>
    )
}

export default Services

