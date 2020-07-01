import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
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

    return (
        <Layout>
            <Heading1>
                Services
            </Heading1>
            {data.prismic.allServices_pages.edges.map(item => (
            <Flex
            direction={{base: "column", md: "row"}}
            alignItems="center"
            justifyContent="center"
            mt={{base: 10, md: 0}}
            >
              <Box
              m={{base: 5, md: 15}}
              >
                  <Link to={'services/' + item.node._meta.uid}>
                    <Image
                    src={item.node.icon && item.node.icon.url}
                    h={{base: "17rem", md:"13rem"}}
                    w={{base: "17rem", md:"13rem"}}
                    />
                  </Link>
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
                    <Link to={'services/' + item.node._meta.uid}>{item.node.page_name[0] && item.node.page_name[0].text}</Link>
                </Heading>
                <Box
                w="3em"
                borderBottom="3px solid"
                borderColor={theme.buttonColor}
                mb={4}
                />
                <Text>
                    {item.node.section_intro[0] && item.node.section_intro[0].text}
                </Text>
                <br />
                <Text
                textDecor="underline"
                >
                  <Link to={'services/' + item.node._meta.uid}>Continue to {item.node.page_name[0] && item.node.page_name[0].text}</Link>
                </Text>
              </Box>             
            </Flex>
             ))}
        </Layout>
    )
}

export default Services

