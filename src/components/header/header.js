import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Nav, MobileNav } from './nav.js'
import { LogoV2 } from './logo.js'
import Phone from "./phone.js"
import { Flex, Box } from "@chakra-ui/core"
import theme from "../../themes/theme.js"
import { MobileMenuIcon } from "./mobile-menu-icon.js"
import BackgroundImage from 'gatsby-background-image'


const Header = () => {
    
  const bgImage = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "floor-plan.png"}) {
        childImageSharp {
          fluid(maxWidth: 1500, quality: 100) {
            base64
            tracedSVG
            aspectRatio
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

    <header>
          <BackgroundImage
            Tag="div"
            fluid={fluidImage}
            backgroundSize="cover"
          >
        
            <Flex
              pl={{base: 0, md: 10}}
              pt={8}
              pb={3}
              w="100vw"
              justifyContent={{base: "center", md: "space-between"}}
              backgroundColor={{base: theme.backgroundColor, lg: "rgba(255, 255, 255, 0);"}}
              display={{base: "none", md: "flex"}}
              >
                <LogoV2 color={theme.mainColor}/>
                <Box
                mt={{base: 0, md: "-2rem"}}
                mr={{base: 0, md: "1rem"}}
                >
                  <Phone display={{base: "none", md: "flex"}} />
                </Box>

            </Flex>
          </BackgroundImage>

      <Nav />
      
    </header>
  )
}

export default Header
