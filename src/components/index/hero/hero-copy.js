import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { Heading1 } from '../../elements'

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
                    ...GatsbyImageSharpFluid
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
        background={{base: "transparent", md: "#e8e6e6c9"}}
        px={{base: 5, md: 16}}
        pt={{base: "4rem", md: 4}}
        pb={8}
        w={{base: "100vw", lg: "auto"}}
        minW={{base: "100vw", lg: "30rem"}}
        maxW={{base: "100vw", lg: "35rem"}}
        mr={{base: 0, lg: 4}}
        mb={{base: 0, md: 4, lg: 0}}
        // justifyContent={{base: "flex-end", md: "center"}}
        justifyContent="center"
        minH={{base: "85vh", md: 0}}
        >
            <Heading1
              fontSize={{base: "2.5rem", md: "3rem"}}
            >{RichText.render(content.node.main_headline)}</Heading1>
            
            <Box>
              <Heading
              as="h3"
              fontSize="xl"
              fontWeight="500"
              mb={2}
              >
                  {content.node.sub_headline[0].text}
              </Heading>
              <Text>
                  {RichText.render(content.node.body_copy)}
              </Text>
            </Box>
        </Flex>
    )
}

export default HeroCopy
