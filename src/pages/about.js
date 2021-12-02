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
        about(lang: "en-us", uid: "about") {
          meta_description
          page_title
          headline
          _meta {
            uid
          }
          main_image
          main_imageSharp {
            childImageSharp {
              fixed(width: 880, height: 1000) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          page_content
        }
      }
    }
  `)
    const content = data.prismic.about
    return (
        <>
        <Layout
        title={content.page_title ? RichText.asText(content.page_title) : ''}
        description={content.meta_description ? RichText.asText(content.meta_description) : ''}
        >
            <Heading1 align="center" pt={true}>
              {RichText.asText(content.headline)}
            </Heading1>

            <Box
            px={{base: 5, md: 24, lg: 48}}
            pb={10}
            >
                {content.main_imageSharp && <Box
                float="left"
                h="500px"
                w={{base: "100%", md: "440px"}}
                mr={6}
                mb={6}
                >
                    <FixedImageHandler
                    fixed={content.main_imageSharp.childImageSharp.fixed}
                    fallback={content.main_image.url}
                    alt={content.main_image.alt}
                    />
                </Box>}
                <LongFormText>
                    {RichText.render(content.page_content)}
                </LongFormText>
            </Box>
        </Layout>
        </>
    )
}

export default About
