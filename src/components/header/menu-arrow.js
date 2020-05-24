import React, { useEffect, useState } from 'react'
import { Animate } from 'react-simple-animate';
import { Box, Flex } from '@chakra-ui/core'

import theme from '../../themes/theme.js'

const MenuArrow = ({ drop }) => {
    const [play, setPlay] = useState(false)
    
    useEffect(() => {
        drop ? setPlay(true) : setPlay(false)
        
    }, [drop])
    
    return (
        <Flex
        ml={2}
        mb="2px"
        display="inline-block"
        alignItems="center"
        >
            <Animate
            play={play}
            duration={0.2}
            start={{ transform: "rotate(0deg)" }}
            end={{ transform: "rotate(180deg)" }}
            >

                <Box
                w={2}
                h={2}
                borderBottom="2px solid"
                borderRight="2px solid"
                borderColor={theme.textColor}
                transform="rotate(45deg)"
                />
            </Animate>
        </Flex>
    )
}

export default MenuArrow
