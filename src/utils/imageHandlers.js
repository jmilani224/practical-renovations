import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Box, Image } from '@chakra-ui/core'

export const BackgroundImageHandler = ({ children, fluid, fallbackImage }) => {
    const bgImageURL = `url('${fallbackImage}')`
    return fluid ? (
      <BackgroundImage
      Tag="div"
      fluid={fluid}
      >
        {children}
      </BackgroundImage>
    ) : (
      <Box bgImage={bgImageURL}
      bgPos="center"
      bgRepeat="no-repeat"
      >
        {children}
      </Box>
    );
}

export const FluidImageHandler = ({ fluid, fallbackImage, alt }) => {
    return fluid ? (
        <Img
        fluid={fluid}
        alt={alt}
        />
      ) : (
        <Image
        src={fallbackImage}
        alt={alt}
        />
    );
}