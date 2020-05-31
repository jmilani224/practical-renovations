import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const BlogCard = ({ data }) => {
    return (
        <Flex
        direction={{base: "column", md: "row", lg: "column"}}
        w={{base: "100vw", md: "40rem", lg: "22rem"}}
        h={{base: "25rem", md: "10rem", lg: "22rem"}}
        mx={4}
        my={{base: 4, lg: 0}}
        backgroundColor="#fff"
        >
            <Box
            w={{base: "auto", md: "15rem", lg: "auto"}}
            h={{base: "auto", md: "10rem", lg: "auto"}}
            overflow="hidden"
            >
                <Img
                fluid={data.main_image.childImageSharp.fluid}
                />
            </Box>
            
            <Box
            ml={{base: 8, md: 6, lg: 4}}
            mr={{base: 0, lg: 2}}
            minH={{base: "auto", lg: "9rem"}}
            >
                <Heading
                as="h4"
                fontSize="2xl"
                my={3}
                >
                    {data.title}
                </Heading>
                <Text
                color="gray.500"
                my={1}
                >
                    {data.desc}
                </Text>
                <Link to={data.href}>
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
