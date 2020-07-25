import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { Heading1 } from '../components/elements'
import { Flex, Grid } from '@chakra-ui/core'
import { Heading2Alt } from '../components/elements.js'
import { RichText } from 'prismic-reactjs'
import { BackgroundImageHandler } from '../utils/imageHandlers'

const Services = () => {
    const data = useStaticQuery(graphql`
    {
    prismic {
        allServices_pages {
          edges {
            node {
              page_name
              _meta {
                uid
              }
              hero_background_image
              hero_background_imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    `)

    return (
        <>
        <Layout
        title="Services"
        description="Start your next custom renovation project in Northeast Ohio."
        >
              <Heading1 align="center" pt={true}>
                  Services
              </Heading1>
              <Grid
              templateColumns={{base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
              gap={2}
              > 
                {data.prismic.allServices_pages.edges.map(item => (

                    <Link to={'services/' + item.node._meta.uid}>
                        <BackgroundImageHandler
                        fluid={item.node.hero_background_imageSharp.childImageSharp.fluid}
                        fallbackImage={item.node.hero_background_imageSharp}
                        >
                          <Flex
                          backgroundColor="#00000040"
                          h="20rem"
                          alignItems="center"
                          justifyContent="center"
                          >
                            <Heading2Alt color="#fff">
                              {RichText.asText(item.node.page_name)}
                            </Heading2Alt>
                          </Flex>                          
                        </BackgroundImageHandler>
                      </Link>
                ))}
             </Grid>
        </Layout>
        </>
    )
}

export default Services

