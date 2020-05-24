import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'
import { Link } from 'gatsby'

const BlogCard = ({ image, title, desc, href }) => {
    console.log(image)
    return (
        <Flex
        direction="column"
        w="40vw"
        h="20rem"
        px={10}
        ml={8}
        mb={8}
        rounded="10px"
        borderTop="8px solid"
        borderColor="#fff"
        backgroundColor="#fff"
        >
            <img src={image} />
            <Heading
            as="h4"
            fontSize="2xl"
            mb={2}
            >
                {title}
            </Heading>
            <Text
            color="gray.500"
            mb={1}
            >
                {desc}
            </Text>
            <Link to={href}>
                <Text
                textDecoration="underline"
                >
                    Read More
                </Text>
            </Link>
        </Flex>
    )
}

export default BlogCard
