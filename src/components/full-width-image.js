import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Heading, Flex } from '@chakra-ui/core'
import { BackgroundImageHandler } from '../utils/imageHandlers.js'

const FullWidthImage = ({ headline, fontSize, headingTag, fluid, fallbackImage, height, accordianIconProp }) => {
    
    return (
        <>
        <BackgroundImageHandler
        fluid={fluid}
        fallbackImage={fallbackImage}
        >

            <Flex
            h={height}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            w="100vw"
            >
                <Heading
                as={headingTag}
                fontSize={fontSize}
                fontWeight="400"
                >
                    {headline && RichText.asText(headline)}
                        {accordianIconProp}
                </Heading>
            </Flex>
            </BackgroundImageHandler>
        </>

    )
}

export default FullWidthImage