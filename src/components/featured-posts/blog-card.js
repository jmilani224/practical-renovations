import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const BlogCard = ({ data }) => {
    console.log(data)
    return (
        <Flex
        direction="column"
        w="40vw"
        h="20rem"
        ml={8}
        mb={8}
        backgroundColor="#fff"
        >
            <Img
            fluid={data.main_image.childImageSharp.fluid}
            />
            
            <Box
            ml={4}
            mr={2}
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
