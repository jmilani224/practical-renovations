import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import theme from '../../themes/theme.js'
import { FluidImageHandler } from '../../utils/imageHandlers.js'
import { Heading2 } from '../elements.js'

const BlogCard = ({ data }) => {
    return (
        <Flex
        direction={{base: "column", md: "row", lg: "column"}}
        w={{base: "100vw", md: "40rem", lg: "22rem"}}
        h={{base: "25rem", md: "10rem", lg: "28rem"}}
        mx={4}
        my={{base: 0, md: 4, lg: 0}}
        backgroundColor="#fff"
        >
            <Link to={'blog/' + data._meta.uid}>
                <Box
                w={{base: "100%", md: "15rem", lg: "100%"}}
                h={{base: "15rem", md: "100%", lg: "15rem"}}
                minW="15rem"
                >
                    <FluidImageHandler
                    fluid={data.hero_imageSharp.childImageSharp.fluid}
                    fallbackImage={data.hero_image.url}
                    alt={data.hero_image.alt}
                    h="100%"
                    />
                </Box>
            </Link>
            
            <Flex
            ml={{base: 8, md: 6, lg: 4}}
            mr={{base: 0, lg: 2}}
            pb={4}
            h="100%"
            overflow="hidden"
            direction="column"
            justifyContent="space-between"
            >
                <Link to={'blog/' + data._meta.uid}>
                    <Heading2 pt={true}>
                        {RichText.asText(data.blog_post_title)}
                    </Heading2>
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
            </Flex>
        </Flex>
    )
}

export default BlogCard
