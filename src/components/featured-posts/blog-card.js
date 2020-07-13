import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Img from 'gatsby-image'
import theme from '../../themes/theme.js'
import { FluidImageHandler } from '../../utils/imageHandlers.js'

const BlogCard = ({ data }) => {
    return (
        <Flex
        direction={{base: "column", md: "row", lg: "column"}}
        w={{base: "100vw", md: "40rem", lg: "22rem"}}
        h={{base: "25rem", md: "10rem", lg: "26rem"}}
        mx={4}
        my={{base: 0, md: 4, lg: 0}}
        backgroundColor="#fff"
        >
            <Box
            w={{base: "100vw", md: "15rem", lg: "100%"}}
            h={{base: "15rem", md: "100%", lg: "12.5rem"}}
            minW="15rem"
            >
                <FluidImageHandler
                fluid={data.hero_imageSharp.childImageSharp.fluid}
                fallbackImage={data.hero_image.url}
                alt={data.hero_image.alt}
                h="100%"
                />
            </Box>
            
            <Box
            ml={{base: 8, md: 6, lg: 4}}
            mr={{base: 0, lg: 2}}
            minH={{base: "auto", lg: "9rem"}}
            overflow="hidden"
            >
                <Link to={'blog/' + data._meta.uid}>
                    <Heading
                    as="h3"
                    fontSize="2xl"
                    my={3}
                    fontWeight="500"
                    >
                        {RichText.asText(data.blog_post_title)}
                    </Heading>
                </Link>
                <Text
                color={theme.lightTextColor}
                my={1}
                >
                    {RichText.asText(data.blog_post_content).substring(0,100) + '...'}
                </Text>
                <Link to={'blog/' + data._meta.uid}>
                    <Text
                    textDecoration="underline"
                    mb={3}
                    >
                        Read More
                    </Text>
                </Link>
            </Box>
        </Flex>
    )
}

export default BlogCard
