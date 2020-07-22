import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/core'
import Layout from '../components/layout'
import { FullWidthImage, Heading1 } from '../components/elements.js'
import ImgGallery from '../components/imggallery.js'
import theme from '../themes/theme'
import MetaData from '../components/meta-data.js'


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
                                fluid(quality:100) {
                                    ...GatsbyImageSharpFluid
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
    
    const accordianIconProp = (<AccordionIcon />)
    
    return (
        <>
        <MetaData
        title="Gallery"
        description="Find inspiration in the custom renovation projects we've completed in Northeast Ohio."
        />
        <Layout>
            <Heading1 align="center" pt={true}>
                Photo Gallery
            </Heading1>
            <Accordion
            allowMultiple="false"
            w="100vw"
            >
            {data.prismic.allGallerys.edges.map(item => {
                //map through gallery sections, determine admin's aspect ratio preference via switch and grab corresponding dimensions and image url
                const galleryArr = item.node.service_gallery.map(section => {
                    let src
                    let width
                    let height

                    switch (section.aspect_ratio) {
                    case '4:3':
                        src = section.gallery_image["4:3"].url;
                        width = 4
                        height = 3
                        break;
                    case '3:4':
                        src = section.gallery_image["3:4"].url;
                        width = 3
                        height = 4
                        break;
                    case 'square':
                        src = section.gallery_image.Square.url;
                        width = 1
                        height = 1
                        break;
                    default:
                        src = section.gallery_image.Square.url;
                        width = 1
                        height = 1
                    }
                    //output an array of objects that contain image info to be ingested by gallery component
                    class GalleryConstructor {
                        constructor(src, width, height) {
                            this.src = src;
                            this.width = width;
                            this.height = height;
                        }
                    }
                    return new GalleryConstructor(src, width, height)
                })

                return (
                <>
                        <AccordionItem
                        id={item.node._meta.id}
                        border="none"
                        >
                            <AccordionHeader
                            px="0"
                            py={4}
                            _focus={{ borderColor: theme.darkGray }}
                            >
                                <FullWidthImage
                                headline={item.node.banner_headline}
                                fontSize="2.2rem"
                                headingTag="h2"
                                fluid={item.node.banner_imageSharp ? item.node.banner_imageSharp.childImageSharp.fluid : null}
                                fallbackImage={item.node.banner_image}
                                height="170px"
                                accordianIconProp={accordianIconProp}
                                />
                            </AccordionHeader>
                            <AccordionPanel p="0">
                                <Box className="gallery">
                                    <ImgGallery data={galleryArr} />
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                </>
            )})}
            </Accordion>
            
        </Layout>
        </>
    )
}

export default Gallery
