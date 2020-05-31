import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/core'
import { Link } from 'gatsby'
import theme from '../../themes/theme.js'

const LoginSignUp = () => {
    return (
        <Flex
        h={6}
        m={4}
        display={{base: "none", md: "flex"}}
        >
            <Link to="/">
                <Text fontFamily="'Roboto Mono', monospace">Login</Text></Link>
            <Divider orientation="vertical" borderColor={theme.mainColor} />
            <Link to="/">
                <Text fontFamily="'Roboto Mono', monospace">Commercial Servies</Text></Link>
        </Flex>
    )
}

export default LoginSignUp
