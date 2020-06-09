import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

import { Heading, Flex, Box, Text } from '@chakra-ui/core'

import Layout from '../components/layout.js'

import theme from '../themes/theme.js'

const ServicesTemplate = () => {
    const bgImage = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "gallery/post-1-image.jpg"}) {
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

  const exampleArr = [
      {
        heading: "Pressure-Treated Lumber",
        body: "Here are some interesting details about wood. Wood comes from trees, which grow out of the ground. Some say they can feel and think, just like you and me."
      },
      {
        heading: "Other Lumber",
        body: "Here are some interesting details about wood. Wood comes from trees, which grow out of the ground. Some say they can feel and think, just like you and me."
      },
      {
        heading: "Other Lumber",
        body: "Here are some interesting details about wood. Wood comes from trees, which grow out of the ground. Some say they can feel and think, just like you and me."
      }
  ]

  const fluidImage = bgImage.file.childImageSharp.fluid
    
    return (
        <Layout>
        
            <ServicesHero fluidImage={fluidImage} />

            <ServicesIntro />

            {exampleArr.map((item, i) => (
                <ServicesDetail
                heading={item.heading}
                body={item.body}
                i={i}
                />
            ))}
            

        </Layout>
    )
}

export default ServicesTemplate

const ServicesHero = ({ fluidImage }) => {
    
    return (
        <>
        <BackgroundImage
        Tag="div"
        fluid={fluidImage}
        >
            <Flex
            h={64}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            >
                <Heading
                as="h1"
                fontSize="3em"
                >
                    Decks
                </Heading>
            </Flex>
        </BackgroundImage>
        </>

    )
}

const ServicesIntro = () => {
    return (
        <Box
        px={{base: 10, md: 24, lg: 48}}
        py={18}
        >
            <Text
            fontSize="xl"
            textAlign="center"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
        </Box>
    )
}

const ServicesDetail = ({ heading, body, i }) => {
    console.log(i)
    return (
        <Flex
        my={24}
        justifyContent="center"
        alignItems="center"
        flexDirection={i % 2 !== 0 ? {base: "column", lg: "row-reverse"} : {base: "column", lg:"row"}}
        >
            <Box
            w="30rem"
            h="20rem"
            backgroundColor="teal.400"
            flexShrink="2"
            />
            
            <Box
            mx={20}
            flexShrink="1"
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
    )
}
