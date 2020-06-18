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
              banner_imageSharp {
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
            focusBorderColor="#000"
            >
            {data.prismic.allGallerys.edges.map(item => (
                <>
                        <AccordionItem focusBorderColor="#000">
                            <AccordionHeader focusBorderColor="#000">
                                <HeadlineOnFullWidthImage
                                headline={item.node.banner_headline}
                                fluid={item.node.banner_imageSharp.childImageSharp.fluid}
                                fallbackImage={item.node.banner_image}
                                h="400px"
                                />
                            </AccordionHeader>
                            <AccordionPanel>
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
