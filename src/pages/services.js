import React from 'react'
import Layout from '../components/layout'
import FullWidthImage from '../components/full-width-image'
import { RichText } from 'prismic-reactjs'
import { useStaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core'
import theme from '../themes/theme.js'


const Services = () => {
    const data = useStaticQuery(graphql`
        {
        prismic {
            allServices_pages {
            edges {
                node {
                icon
                }
            }
            }
        }
        }
    `)
    return (
        <Layout>
            <Box h={500} w={500}>
            <img style={{fill:theme.mainColor}} src={data.prismic.allServices_pages.edges[5].node.icon.url} />
            </Box>

        </Layout>
    )
}

export default Services

