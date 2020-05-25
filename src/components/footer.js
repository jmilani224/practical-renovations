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
              >
                <Logo cls="footer" color="#fff" />
                <Box
                ml={12}
                >
                    {navArr.map(item => (
                    <Link
                    to={item.href}
                    display='inline-block'
                    >
                        <PseudoBox
                        as="span"
                        color="#fff"
                        fontWeight="500"
                        _after={{content: "'•'", display: "inline-block", margin: "0 9px"}}
                        >
                            {item.name}
                        </PseudoBox>
                    </Link>
                    ))}
                  </Box>
              </Flex>
              <Stack
              mb={10}
              >
              <Divider mb={4} w="100vw" borderColor="#fff"/>
              <Text
              color="#fff"
              textAlign="right"
              fontSize="sm"
              mr={5}
              >
                  Copyright 2020 Practical Renovations, LLC. All Rights Reserved.
              </Text>
              </Stack>
            </Flex>
          </footer>
    )
}

export default Footer
