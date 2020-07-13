import React from 'react'
import Layout from '../components/layout.js'
import { Heading1, LongFormText } from '../components/elements.js'
import { Box } from '@chakra-ui/core'
import { FixedImageHandler } from '../utils/imageHandlers.js'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs';


const About = () => {
    const data = useStaticQuery(graphql`
    {
      prismic {
        allAbouts {
          edges {
            node {
              headline
              main_image
              main_imageSharp {
                childImageSharp {
                  fixed (width: 440, height: 500) {
                    base64
                    tracedSVG
                    aspectRatio
                    srcWebp
                    srcSetWebp
                    originalName
                  }
                }
              }
              page_content
            }
          }
        }
      }
    }
  `)
    const content = data.prismic.allAbouts.edges[0].node
    console.log(content.main_imageSharp.childImageSharp.fixed)
    console.log(content.main_image.url)

    return (
        <Layout>
            <Heading1 align="center" pt={true}>
              {RichText.asText(content.headline)}
            </Heading1>

            <Box
            px={{base: 10, md: 24, lg: 48}}
            pb={10}
            >
                <Box
                float="left"
                h="500px"
                w="440px"
                mr={6}
                mb={6}
                display={{base: "none", md: "block"}}
                >
                    <FixedImageHandler
                    fixed={content.main_imageSharp.childImageSharp.fixed}
                    fallback={content.main_image.url}
                    alt={content.main_image.alt}
                    />
                </Box>
                <LongFormText>
                    {RichText.render(content.page_content)}
                </LongFormText>
            </Box>
        </Layout>
    )
}

export default About
