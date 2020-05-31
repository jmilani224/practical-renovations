import React from 'react'

import { mobileMenuIcon } from '../../images/svg.js'
import { Box } from '@chakra-ui/core'

import theme from '../../themes/theme.js'

export const MobileMenuIcon = ({ handleNavOpen }) => {
    const icon = mobileMenuIcon(theme.textColor)
    return (
        <Box
        display={{base: "block", md: "none"}}
        position="absolute"
        top={4}
        right={4}
        w={10}
        dangerouslySetInnerHTML={{__html: icon}}
        cursor="pointer"
        onClick={handleNavOpen}
        />
    )
}
