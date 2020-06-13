import React from 'react'
import {
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Select
} from '@chakra-ui/core'

import theme from '../themes/theme.js'

const ContactForm = () => {
    return (
        <Flex
        direction="column"
        w={{base: "100vw", md: "35rem", lg: "25rem"}}
        h="37rem"
        px={10}
        borderTop="8px solid"
        borderColor="#fff"
        borderTopColor={theme.mainColor}
        backgroundColor="#fff"
        >
            <Heading 
            as="h3"
            my={6}
            mx={3}
            fontSize="3xl"
            fontWeight="500"
            >
                Get an Estimate
            </Heading>
            <FormControl m={3} isRequired>
                <FormLabel htmlFor="fname">First Name</FormLabel>
                <Input focusBorderColor={theme.mainDark} id="fname" placeholder="First Name" />
            </FormControl>
            <FormControl m={3} isRequired>
                <FormLabel htmlFor="lname">Last Name</FormLabel>
                <Input focusBorderColor={theme.mainDark} id="lname" placeholder="Last Name" />
            </FormControl>
            <FormControl m={3} isRequired>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <Input focusBorderColor={theme.mainDark} id="phone" placeholder="Phone Number" />
            </FormControl>
            <FormControl m={3} isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input focusBorderColor={theme.mainDark} id="email" placeholder="Email Address" />
            </FormControl>
            <FormControl m={3} >
                <Select focusBorderColor={theme.mainDark} placeholder="How Can We Help?">
                    <option value="paint">Paint</option>
                    <option value="drywall">Drywall</option>
                    <option value="kitchen bath">Kitchen & Bath</option>
                    <option value="electric plumbing">Electric & Plumbing</option>
                    <option value="decks">Decks</option>
                </Select>
            </FormControl>
            <Button
            h={12}
            color="#fff"
            backgroundColor={theme.buttonColor}
            _hover={{ bg: theme.buttonColorDark }}
            type="submit"
            m={3}
            >
                Submit
            </Button>

        </Flex>
    )
}

export default ContactForm