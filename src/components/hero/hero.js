import React from 'react'
import { Flex } from '@chakra-ui/core'

import BackgroundImage from 'gatsby-background-image'

import { useStaticQuery, graphql } from "gatsby"
import ContactForm from '../contact-form'
import HeroCopy from './hero-copy.js'

  

const Hero = () => {
    const bgImage = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "hero/stair-hero-rt.jpg"}) {
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
  `)
const fluidImage = bgImage.file.childImageSharp.fluid  
    return (

            <BackgroundImage
            Tag="div"
            fluid={fluidImage}
            >
                <Flex
                h="100vh"
                w="100vw"
                py={16}
                alignItems="start"
                justifyContent="space-evenly"
                >
                    <HeroCopy />

                    <ContactForm />
                </Flex>

            </BackgroundImage>

    )
}

export default Hero
