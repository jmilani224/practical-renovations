import React from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const BlogCard = ({ image, title, desc, href }) => {
    return (
        <Flex
        direction="column"
        w="40vw"
        h="20rem"
        ml={8}
        mb={8}
        rounded="10px"
        backgroundColor="#fff"
        >
            <Img
            style={{borderRadius: '10px 10px 0 0'}}
            fluid={image}
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
                    {title}
                </Heading>
                <Text
                color="gray.500"
                my={1}
                >
                    {desc}
                </Text>
                <Link to={href}>
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
