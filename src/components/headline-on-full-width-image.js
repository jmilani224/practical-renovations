import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Heading, Flex } from '@chakra-ui/core'
import { BackgroundImageHandler } from '../utils/imageHandlers.js'

const HeadlineOnFullWidthImage = ({ headline, fluid, fallbackImage, h }) => {
    
    return (
        <>
        <BackgroundImageHandler
        fluid={fluid}
        fallbackImage={fallbackImage}
        >

            <Flex
            h={h}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            w="100vw"
            >
                <Heading
                as="h1"
                fontSize="3.3rem"
                fontWeight="400"
                >
                    {RichText.asText(headline)}
                </Heading>
            </Flex>
            </BackgroundImageHandler>
        </>

    )
}

export default HeadlineOnFullWidthImage