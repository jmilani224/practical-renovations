import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Phone = ({ display }) => {
    return (
        <Flex
        m={4}
        display={display}
        direction="column"
        alignItems="flex-end"
        >
            <Text fontFamily="'Roboto Mono', monospace">Emergency Service Line</Text>
            <a href="tel:xxx-xxx-xxxx">
                <Text
                fontFamily="'Roboto Mono', monospace"
                fontSize="1.8em"
                >xxx-xxx-xxxx</Text>
            </a>
        </Flex>
    )
}

export default Phone
