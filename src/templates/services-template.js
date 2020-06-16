import React from 'react'
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Heading, Flex, Box, Text, Divider } from '@chakra-ui/core'
import { BackgroundImageHandler, ImageHandler } from '../utils/imageHandlers.js'

import Layout from '../components/layout.js'
import theme from '../themes/theme.js'

const ServicesTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismic.allServices_pages.edges.slice(0, 1).pop();
  if (!doc) return null
  const servicesArr = doc.node.services_details
    return (
      <Layout>
      
          <ServicesHero
          headline={doc.node.headline}
          fluid={doc.node.hero_background_imageSharp ? doc.node.hero_background_imageSharp.childImageSharp.fluid : null}
          fallbackImage={doc.node.hero_background_image.url}
          />

          <ServicesIntro intro={doc.node.section_intro} />

          {servicesArr.map((item, i, arr) => (
              <ServicesDetail
              fluid={item.services_detail_imageSharp ? item.services_detail_imageSharp.childImageSharp.fluid : null}
              fallbackImage={item.services_detail_image.url}
              heading={RichText.render(item.services_detail_heading)}
              body={RichText.render(item.services_detail_body)}
              i={i}
              arr={arr}

              />
          ))}
          

      </Layout>
    )
    
}

export default ServicesTemplate

const ServicesHero = ({ headline, fluid, fallbackImage }) => {
    
    return (
        <>
        <BackgroundImageHandler
        fluid={fluid}
        fallbackImage={fallbackImage}
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
            </BackgroundImageHandler>
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

const ServicesDetail = ({ fluid, fallbackImage, heading, body, i, arr }) => {
    return (
      <>
        <Flex
        my={24}
        justifyContent="center"
        alignItems="center"
        flexDirection={i % 2 !== 0 ? {base: "column", lg: "row-reverse"} : {base: "column", lg:"row"}} // alternates image and copy
        >
            <Box
            w={{base: "100vw", md: "30rem"}}
            h="20rem"
            >
              <ImageHandler
              fluid={fluid}
              style={{height:"100%"}}
              fallbackImage={fallbackImage} //add alt prop below
              />
            </Box>
            <Box
            mx={10}
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
            {i < arr.length - 1 && <Divider w="100vw" />}
            </>
    )
}

export const query = graphql`
query ServicesPageQuery($uid: String) {
  prismic {
    allServices_pages(uid: $uid) {
      edges {
        node {
          headline
          section_intro
          services_details {
            services_detail_body
            services_detail_heading
            services_detail_image
            services_detail_imageSharp {
              childImageSharp {
                fluid(quality: 100) {
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
          
          _meta {
            uid
          }
          hero_background_image
          hero_background_imageSharp {
            childImageSharp {
              fluid(quality: 100) {
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
`