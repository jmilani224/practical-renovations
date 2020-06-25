import React from 'react'
import { Flex } from '@chakra-ui/core'

import BackgroundImage from 'gatsby-background-image'

import { useStaticQuery, graphql } from "gatsby"
import ContactForm from '../contact-form'
import HeroCopy from './hero-copy.js'
import theme from '../../themes/theme.js'

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
                h="auto"
                w="100vw"
                pt={{base: 0, lg: 16}}
                pb={{base: 0, md: 4}}
                px={{base: 0, lg: 4}}
                direction={{base: "column", lg: "row"}}
                alignItems={{base: "center", lg: "start"}}
                justifyContent="space-evenly"
                >
                    <HeroCopy />
                    <Flex
                    w={{base: "100vw", md: "35rem", lg: "28rem"}}
                    h="40rem"
                    borderTop="8px solid"
                    borderColor="#fff"
                    borderTopColor={theme.mainColor}
                    backgroundColor="#fff"
                    justifyContent="center"
                    >
                      <ContactForm />
                    </Flex>
                </Flex>

            </BackgroundImage>

    )
}

export default Hero
