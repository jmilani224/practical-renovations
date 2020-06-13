import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'

import { Flex, Heading, Text } from '@chakra-ui/core'

const HeroCopy = () => {
    const data = useStaticQuery(graphql`
    {
      prismic {
        allHomepages {
          edges {
            node {
              body_copy
              hero_imageSharp {
                childImageSharp {
                  fluid {
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                    originalImg
                    originalName
                  }
                }
              }
              main_headline
              sub_headline
            }
          }
        }
      }
    }
  `)
    const content = data.prismic.allHomepages.edges[0]
    return (
        <Flex
        direction="column"
        backgroundColor={{base: "#e8e6e6", md: "#e8e6e687"}}
        p={10}
        px={{base: 10, md: 20}}
        w={{base: "100vw", lg: "auto"}}
        minW={{base: "100vw", lg: "30rem"}}
        maxW={{base: "100vw", lg: "35rem"}}
        mr={{base: 0, lg: 4}}
        mb={{base: 0, md: 4, lg: 0}}
        >
            <Heading
            as="h1"
            fontSize="4xl"
            fontWeight="500"
            mb={4}
            >
                {RichText.render(content.node.main_headline)}
            </Heading>
            <Heading
            as="h3"
            fontSize="xl"
            fontStyle="italic"
            fontWeight="500"
            mb={2}
            >
                {content.node.sub_headline[0].text}
            </Heading>
            <Text>
                {RichText.render(content.node.body_copy)}
            </Text>
        </Flex>
    )
}

export default HeroCopy
