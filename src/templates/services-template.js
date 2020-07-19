import React from 'react'
import { graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import { Flex, Box, Text } from '@chakra-ui/core'
import { FluidImageHandler } from '../utils/imageHandlers.js'
import { Heading1, Heading2, FullWidthImage } from '../components/elements.js'
import DrawerForm from '../components/drawer-form.js'
import MetaData from '../components/meta-data.js'
import Layout from '../components/layout.js'
import theme from '../themes/theme.js'

const ServicesTemplate = ({ data }) => {
  if (!data) return null //validation check - without this, the build was failing on a /test/ path, who can say why?
  const doc = data.prismic.allServices_pages.edges.slice(0, 1).pop();
  if (!doc) return null //validation check - recommended by Prismic to prevent a build error when previews are on
  const servicesArr = doc.node.services_details
    return (
      <>
      <MetaData
        title={doc.node.headline ? RichText.asText(doc.node.headline) : null}
        description={doc.node.section_intro ? RichText.asText(doc.node.section_intro) : null}
        />
      <Layout>

          <FullWidthImage
          headingTag="h1"
          fontSize="3.3rem"
          fluid={doc.node.hero_background_imageSharp ? doc.node.hero_background_imageSharp.childImageSharp.fluid : null} //Gatsby image GraphQL query validation
          fallbackImage={doc.node.hero_background_image.url}
          height="20rem"
          />

          <Flex
          direction="column"
          alignItems="center"
          mb={10}
          mt={4}
          >
            <Heading1 align="center" pt={true}>
              {RichText.asText(doc.node.headline)}
            </Heading1>
            <ServicesIntro intro={doc.node.section_intro} />
            <DrawerForm buttonMargin={4}/>
          </Flex>

          {servicesArr.map((item, i, arr) => (
              <ServicesDetail
              key={i}
              fluid={item.services_detail_imageSharp ? item.services_detail_imageSharp.childImageSharp.fluid : null} //Gatsby image GraphQL query validation
              fallbackImage={item.services_detail_image ? item.services_detail_image.url : null}
              alt={item.services_detail_image ? item.services_detail_image.alt : null}
              heading={RichText.render(item.services_detail_heading ? item.services_detail_heading : null)}
              body={RichText.render(item.services_detail_body ? item.services_detail_body : null)}
              i={i}
              arr={arr}
              />
          ))}
          

      </Layout>
      </>
    )
    
}

export default ServicesTemplate

const ServicesIntro = ({ intro }) => {
    return (
        <Box
        px={{base: 10, md: 24, lg: 48}}
        pb={4}
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

const ServicesDetail = ({ fluid, fallbackImage, alt, heading, body, i }) => {
    return (
      <>
        <Flex
        alignItems="center"
        flexDirection={i % 2 !== 0 ? {base: "column", lg: "row-reverse"} : {base: "column", lg:"row"}} // alternates image and copy
        >
            <Box
            w={{base: "100vw", lg: "50vw"}}
            overflow="hidden"
            >
              <FluidImageHandler
              fluid={fluid}
              fallbackImage={fallbackImage}
              alt={alt}
              />
            </Box>
            <Box
            px={16}
            pb={4}
            w={{base: "100vw", lg: "50vw"}}
            minH={64}
            mt={{base: 4, lg: 0}}
            >
                <Heading2>
                    {heading}
                </Heading2>
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