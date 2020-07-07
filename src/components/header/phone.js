import React from 'react'
import { Flex, Text } from '@chakra-ui/core'

const Phone = ({ display }) => {
    return (
        <Flex
        m={4}
        display={display}
        direction="column"
        alignItems="center"
        >
            <Text
            fontFamily="'Roboto Mono', monospace"
            >
                Emergency Service Line
            </Text>
            <a href="tel:4404657570">
                <Text
                fontFamily="'Roboto Mono', monospace"
                fontSize="1.7rem"
                >
                    (440)465-7570
                </Text>
            </a>
        </Flex>
    )
}

export default Phone
