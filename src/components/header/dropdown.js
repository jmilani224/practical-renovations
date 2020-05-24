import React from 'react'
import {
    Text,
    Flex
 } from '@chakra-ui/core'
 import { Link } from 'gatsby'

 import theme from '../../themes/theme.js'

const Dropdown = ({ menuItems }) => {
    return (
        <Flex
        direction="column"
        position="absolute"
        p={3}
        backgroundColor={theme.mainLight}
        zIndex="2"
        >
            {menuItems.map(item => (
                <Link to={item.href}>
                    <Text p={2}>{item.page}</Text>
                </Link>
            ))}
        </Flex>
    )
}

export default Dropdown
