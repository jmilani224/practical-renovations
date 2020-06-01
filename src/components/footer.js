import React from 'react'
import Logo from "./header/logo.js"
import { navArr } from './header/nav.js'
import { Box, Flex, PseudoBox, Divider, Text, Stack } from "@chakra-ui/core"
import { Link } from "gatsby"
import theme from '../themes/theme.js'

const Footer = () => {
    return (
        <footer>
            <Flex
            bg={theme.mainColor}
            h={64}
            direction="column"
            justifyContent="space-between"
            >
              <Flex
              direction="column"
              justifyContent="center"
              alignItems={{base: "center", md: "start"}}
              >
                <Box
                mt={6}
                mb={3}
                ml={8}
                >
                    <Logo cls="footer" color="#fff" />
                </Box>
                <Box
                ml={{base: 0, md: 12}}
                >
                    {navArr.map((item, i, arr) => (
                        <PseudoBox
                            as="span"
                            color="#fff"
                            fontWeight="500"
                            _after={i < arr.length - 1 && {content: "'•'", display: "inline-block", margin: "0 9px"}}
                            >
                                <Link
                                to={item.href}
                                display='inline-block'
                                >
                                    {item.name}
                                </Link>
                        </PseudoBox>
                    ))}
                  </Box>    
              </Flex>
              <Stack
              mb={10}
              >
              <Divider mb={4} w="100vw" borderColor="#fff"/>
              <Text
              color="#fff"
              textAlign={{base: "center", md: "right"}}
              fontSize="sm"
              mr={{base: 0, md: 5}}
              >
                  Copyright &#169; 2020 Practical Renovations, LLC. All Rights Reserved.
              </Text>
              </Stack>
            </Flex>
          </footer>
    )
}

export default Footer
