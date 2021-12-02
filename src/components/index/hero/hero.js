import React from 'react'
import { Flex } from '@chakra-ui/core'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"
import ContactForm from '../../contact-form'
import HeroCopy from './hero-copy.js'
import theme from '../../../themes/theme.js'
import { MobileMenuIcon } from '../../header/mobile-menu-icon'
import { MobileNav } from '../../header/nav'
import { LogoV2 } from '../../header/logo'
import useMobileMenuControl from '../../../hooks/useMobileMenuControl.js'

const Hero = () => {
    const bgImage = useStaticQuery(graphql`
    {
      prismic {
        homepage(lang: "en-us", uid: "homepage") {
          hero_image
          hero_imageSharp {
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
  `)
  const fluidImage = bgImage.prismic.homepage.hero_imageSharp.childImageSharp.fluid

  const [navOpen, handleNavOpen] = useMobileMenuControl()

  return (
    <>
            <BackgroundImage
            tag="div"
            fluid={fluidImage}
            >
              <MobileMenuIcon handleNavOpen={handleNavOpen} />
              <MobileNav navOpen={navOpen} handleNavOpen={handleNavOpen} />
              
                <Flex
                h="auto"
                w="100vw"
                minH="100vh"
                pt={{base: 0, lg: 16}}
                pb={{base: 0, md: 4}}
                px={{base: 0, lg: 4}}
                direction={{base: "column", lg: "row"}}
                alignItems={{base: "center", lg: "start"}}
                justifyContent={{base: "flex-end", md: "flex-start", lg: "space-evenly"}}
                backgroundColor={{base: "white", lg: "transparent"}}
                >
                  <Flex
                  justifyContent="center"
                  alignItems="flex-start"
                  pt={8}
                  display={{base: "flex", md: "none"}}
                  >
                    <LogoV2 color={theme.h1Color}/>
                  </Flex>
                  <HeroCopy />
                  <HeroForm display={{base: "none", md: "flex"}} />
                </Flex>
            </BackgroundImage>
            <HeroForm display={{base: "flex", md: "none"}} />
      </>
    )
}

export default Hero


const HeroForm = ({ display }) => (
  <Flex
  display={display}
  w={{base: "100vw", md: "35rem", lg: "28rem"}}
  h="auto"
  borderTop="8px solid"
  borderColor="#fff"
  borderTopColor={theme.mainColor}
  backgroundColor="#fff"
  justifyContent="center"
  pb={10}
  >
    <ContactForm />
  </Flex>
)