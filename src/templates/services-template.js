import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Heading, Flex, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout.js'
import theme from '../themes/theme.js'

const ServicesTemplate = () => {

  const data = useStaticQuery(graphql`
  query ServicesPageQuery($uid: String) {
      prismic {
        allServices_pages(uid: $uid) {
          edges {
            node {
              headline
              hero_background_imageSharp {
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
              section_intro
              services_details {
                services_detail_body
                services_detail_heading
                services_detail_image
                services_detail_imageSharp {
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
              }
            }
          }
        }
      }
    }
  `)

  const doc = data.prismic.allServices_pages.edges.slice(0,1).pop();
  console.log(data)
  const servicesArr = doc.node.services_details
  console.log(doc)

    return (
        <Layout>
        
            <ServicesHero heading={doc.node.headline} />

            <ServicesIntro intro={doc.node.section_intro} />

            {servicesArr.map((item, i) => (
                <ServicesDetail
                fluid={null}
                heading={RichText.render(item.services_detail_heading)}
                body={RichText.render(item.services_detail_body)}
                i={i}
                />
            ))}
            

        </Layout>
    )
}

export default ServicesTemplate

const ServicesHero = ({ headline, fluidImage }) => {
    
    return (
        <>
        <BackgroundImage
        Tag="div"
        fluid={null}
        >
            <Flex
            h={64}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            >
                <Heading
                as="h1"
                fontSize="3.3rem"
                fontWeight="400"
                >
                    {RichText.render(headline)}
                </Heading>
            </Flex>
        </BackgroundImage>
        </>

    )
}

const ServicesIntro = ({ intro }) => {
    return (
        <Box
        px={{base: 10, md: 24, lg: 48}}
        py={18}
        >
            <Text
            fontSize="xl"
            textAlign="center"
            >
              {RichText.render(intro)}
            </Text>
        </Box>
    )
}

const ServicesDetail = ({ fluid, heading, body, i }) => {
    return (
        <Flex
        my={24}
        justifyContent="center"
        alignItems="center"
        flexDirection={i % 2 !== 0 ? {base: "column", lg: "row-reverse"} : {base: "column", lg:"row"}} // alternates image and copy
        >
            <Box
            w="20rem"
            h="20rem"
            backgroundColor={theme.mainColor}
            flexShrink="2"
            />
            
            <Box
            mx={10}
            flexShrink="1"
            maxW="30rem"
            >
                <Heading
                as="h2"
                fontSize="2xl"
                mb={4}
                mt={{base: 10, lg: 0}}
                >
                    {heading}
                </Heading>
                <Box
                w="3em"
                borderBottom="3px solid"
                borderColor={theme.buttonColor}
                mb={4}
                />
                <Text>
                    {body}
                </Text>
            </Box>
        </Flex>
    )
}
