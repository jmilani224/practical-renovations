import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/core'

import { homeSVG, logoV3 } from '../../images/svg.js'

export const Logo = ({ cls, color }) => {
    let home = homeSVG(cls, color)
    return (
        <Link to="/">
            <Box
            display="inline-block"
            >
                <Box 
                dangerouslySetInnerHTML={{__html: home}}
                w="4.5rem"
                display="inline-block"
                mr="0.5rem"
                />
                <Text
                fontSize="2.3rem"
                fontFamily="Roboto Slab, serif"
                lineHeight="0.9"
                color={color}
                display="inline-block"
                >
                    Practical<br />Renovations, LLC
                </Text>
            </Box>
        </Link>
    )
}

export const LogoV2 = ({ color }) => {
    const logo = logoV3(color)

    return (
        <Link to="/">
            <Box
            dangerouslySetInnerHTML={{__html: logo}}
            w="18rem"
            display="inline-block"
            />
        </Link>
    )
}