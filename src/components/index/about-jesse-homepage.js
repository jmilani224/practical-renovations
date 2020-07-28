import React from 'react'
import { Box } from '@chakra-ui/core'
import { Heading2Alt } from '../elements.js'
import AboutJesse from '../about-jesse.js'

const AboutJesseHomepage = () => {
    return (
        <Box
        backgroundColor="#fff"
        py={7}
        >
          <Box mb={4}>
            <Heading2Alt align="center">
              Let's Work Together
            </Heading2Alt>
          </Box>
          <AboutJesse textAlign="center" />
        </Box>
    )
}

export default AboutJesseHomepage
