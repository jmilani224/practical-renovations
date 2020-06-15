import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Heading, Flex, Box, Text, Divider } from '@chakra-ui/core'

import Layout from '../components/layout.js'
import theme from '../themes/theme.js'
import { array } from 'prop-types'

const ServicesTemplate = ({ data }) => {

  const doc = data.prismic.allServices_pages.edges[0].node;
  const servicesArr = doc.services_details

    return (
        <Layout>
        
            <ServicesHero
            headline={doc.headline}
            fluidImage={doc.hero_background_imageSharp.childImageSharp.fluid}
            fallbackImage={doc.hero_background_image}
            />

            <ServicesIntro intro={doc.section_intro} />

            {servicesArr.map((item, i, arr) => (
                <ServicesDetail
                fluid={item.services_detail_imageSharp.childImageSharp.fluid}
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

const ServicesHero = ({ headline, fluidImage, fallbackImage }) => {
    
    return (
        <>
        <BackgroundImageHandler
        fluidImage={fluidImage}
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

const BackgroundImageHandler = ({ children, fluidImage, fallbackImage }) => {
  
    return fluidImage ? (
      <BackgroundImage
      Tag="div"
      fluid={fluidImage}
      >
        {children}
      </BackgroundImage>
    ) : (
      <Box bgImage={fallbackImage}
      bgPos="center"
      bgRepeat="no-repeat">
        {children}
      </Box>
    );
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

const ServicesDetail = ({ fluid, heading, body, i, arr }) => {
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
              <Img
              fluid={fluid}
              style={{height:"100%"}}
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
          _meta {
            uid
          }
          hero_background_image
        }
      }
    }
  }
}
`