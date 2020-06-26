import React from 'react'
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Heading, Flex, Box, Text } from '@chakra-ui/core'
import { FluidImageHandler } from '../utils/imageHandlers.js'
import { Heading1, FullWidthImage } from '../components/elements.js'

import Layout from '../components/layout.js'
import theme from '../themes/theme.js'

const ServicesTemplate = ({ data }) => {
  if (!data) return null //validation check - without this, the build was failing on a /test/ path, who can say why?
  const doc = data.prismic.allServices_pages.edges.slice(0, 1).pop();
  if (!doc) return null //validation check - recommended by Prismic to prevent a build error when previews are on
  const servicesArr = doc.node.services_details
    return (
      <Layout>

          <FullWidthImage
          headingTag="h1"
          fontSize="3.3rem"
          fluid={doc.node.hero_background_imageSharp ? doc.node.hero_background_imageSharp.childImageSharp.fluid : null} //Gatsby image GraphQL query validation
          fallbackImage={doc.node.hero_background_image.url}
          height="20rem"
          />

          <Heading1>
            {RichText.asText(doc.node.headline)}
          </Heading1>
          <ServicesIntro intro={doc.node.section_intro} />

          {servicesArr.map((item, i, arr) => (
              <ServicesDetail
              fluid={item.services_detail_imageSharp ? item.services_detail_imageSharp.childImageSharp.fluid : null} //Gatsby image GraphQL query validation
              fallbackImage={item.services_detail_image.url}
              alt={item.services_detail_image.alt}
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

const ServicesDetail = ({ fluid, fallbackImage, alt, heading, body, i, arr }) => {
    return (
      <>
        <Flex
        my={10}
        justifyContent="center"
        alignItems="center"
        flexDirection={i % 2 !== 0 ? {base: "column", lg: "row-reverse"} : {base: "column", lg:"row"}} // alternates image and copy
        >
            <Box
            w={{base: "100vw", md: "38rem"}}
            overflow="hidden"
            >
              <FluidImageHandler
              fluid={fluid}
              fallbackImage={fallbackImage}
              alt={alt}
              />
            </Box>
            <Box
            mx={16}
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
                  ...GatsbyImageSharpFluid
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