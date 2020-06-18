import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import {
    Heading,
    Box,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/core'

import Layout from '../components/layout'
import HeadlineOnFullWidthImage from '../components/headline-on-full-width-image'
import ImgGallery from '../components/imggallery.js'

const Gallery = () => {
    const data = useStaticQuery(graphql`
    {
      prismic {
        allGallerys {
          edges {
            node {
              banner_image
            
              service_gallery {
                gallery_image
                aspect_ratio
              }
              banner_headline
              _meta {
                id
              }
            }
          }
        }
      }
    }
  `)


    const accordianIconProp = (<AccordionIcon />)
    return (
        <Layout>
            <Heading
            as="h1"
            >
                Photo Gallery
            </Heading>

            <Accordion
            allowMultiple="false"
            w="100vw"
            >
            {data.prismic.allGallerys.edges.map(item => (
                <>
                        <AccordionItem>
                            <AccordionHeader
                            px="0"
                            py={4}
                            _focus={{ bg: "none", borderColor: "none" }}
                            _hover={{ bg: "none", borderColor: "none" }}
                            >
                                <HeadlineOnFullWidthImage
                                headline={item.node.banner_headline}
                                fontSize="2.7rem"
                                headingTag="h2"
                                fluid={null}
                                fallbackImage={item.node.banner_image}
                                height="300px"
                                accordianIconProp={accordianIconProp}
                                />
                            </AccordionHeader>
                            <AccordionPanel p="0">
                                <ImgGallery />
                            </AccordionPanel>
                        </AccordionItem>
                </>
            ))}
            </Accordion>
            
            
        </Layout>
    )
}

export default Gallery
