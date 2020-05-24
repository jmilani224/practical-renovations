import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/core'
import { Link } from 'gatsby'

const LoginSignUp = () => {
    return (
        <Flex
        h={6}
        m={4}
        >
            <Link to="/"><Text>Login</Text></Link>
            <Divider orientation="vertical" />
            <Link to="/"><Text>Commercial Servies</Text></Link>
        </Flex>
    )
}

export default LoginSignUp
