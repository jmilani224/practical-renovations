import React from 'react'
import {
    Text,
    Flex,
    PseudoBox
 } from '@chakra-ui/core'
 import { Link } from 'gatsby'

 import theme from '../../themes/theme.js'

const Dropdown = ({ menuItems }) => {
    return (
        <Flex
        direction="column"
        position="absolute"
        backgroundColor={theme.mainGray}
        zIndex="2"
        >
            {menuItems.map(item => (
                <Link to={item.href}>
                    <PseudoBox
                    _hover={{bg: theme.mainLight}}
                    >
                        <Text px={4} py={2}>{item.page}</Text>
                    </PseudoBox>
                </Link>
            ))}
        </Flex>
    )
}

export default Dropdown
