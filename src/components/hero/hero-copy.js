import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'

const HeroCopy = () => {
    return (
        <Flex
        direction="column"
        backgroundColor="#e8e6e687"
        p={10}
        minW="30rem"
        maxW="35rem"
        mr={4}
        >
            <Heading
            as="h1"
            fontSize="4xl"
            mb={4}
            >
                Rebuilding Communities, <br />One Home at a Time
            </Heading>
            <Heading
            as="h3"
            fontSize="xl"
            fontStyle="italic"
            mb={2}
            >
                Licensed, Bonded &amp; Insured
            </Heading>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Text>
        </Flex>
    )
}

export default HeroCopy
