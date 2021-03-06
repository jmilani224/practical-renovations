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
      bgPos="cover"
      bgRepeat="no-repeat"
      >
        {children}
      </Box>
    );
}

export const FluidImageHandler = ({ fluid, fallbackImage, alt, h }) => {
    return fluid ? (
        <Img
        fluid={fluid}
        alt={alt}
        style={{"height": h}}
        />
      ) : (
        <Image
        src={fallbackImage}
        alt={alt}
        />
    );
}

export const FixedImageHandler = ({ fixed, fallbackImage, alt }) => {
  return fixed ? (
      <Img
      fixed={fixed}
      alt={alt}
      style={{height: "100%", width: "100%"}}
      />
    ) : (
      <Image
      h="100%"
      w="100%"
      src={fallbackImage}
      alt={alt}
      />
  );
}