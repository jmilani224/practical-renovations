import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import { Box, Image } from '@chakra-ui/core'

import theme from '../themes/theme.js'

export const BackgroundImageHandler = ({ children, fluid, fallbackImage, style }) => {
    const bgImageURL = `url('${fallbackImage}')`
    return fluid ? (
      <BackgroundImage
      Tag="div"
      fluid={fluid}
      backgroundColor={theme.mainColor}
      style={style}
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