import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from '@chakra-ui/core'

import { homeSVG } from '../../images/svg.js'

const Logo = ({ cls, color }) => {
    let home = homeSVG(cls, color)
    return (
        <Link to="/">
            <Box
            pl={10}
            pt={8}
            pb={3}
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
                    Practical<br />Renovations
                </Text>
            </Box>
        </Link>
    )
}

export default Logo
