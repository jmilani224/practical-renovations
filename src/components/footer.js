import React from 'react'
import { LogoV2 } from "./header/logo.js"
import { navArr } from './header/nav.js'
import { 
    Box,
    Flex,
    PseudoBox,
    Divider,
    Text,
    Stack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from "@chakra-ui/core"
import { Link } from "gatsby"
import theme from '../themes/theme.js'
import { PrimaryButton } from './ui-elements.js'
import ContactForm from './contact-form.js'

const Footer = () => {
    
    return (
        <footer>
            <Flex
            bg={theme.mainColor}
            direction="column"
            justifyContent="space-between"
            >
              <Flex
              direction="column"
              justifyContent="center"
              alignItems={{base: "center", md: "start"}}
              >
                <Flex
                direction="column"
                alignItems="center"
                ml={{base: 0, md: 12}}
                >
                    <Box
                    mt={6}
                    mb={3}
                    >
                        <LogoV2 color="#fff"/>
                    </Box>
                    <Box
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
                    <EstimateFormButton />
                </Flex> 
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


export const EstimateFormButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <Box>
                <PrimaryButton
                CTA="Get an Estimate"
                ref={btnRef}
                onClick={onOpen}
                />

                <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="md"
                >
                    <DrawerOverlay />
                    <DrawerContent
                    alignItems="center"
                    >
                    <DrawerCloseButton />
                            <ContactForm />
                    </DrawerContent>
                </Drawer>
            </Box>
    )
}
