import React from 'react'
import {
    Flex,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Select
} from '@chakra-ui/core'

import theme from '../themes/theme.js'
import { PrimaryButton } from './elements.js'

const ContactForm = () => {
    return (
            <Flex
            direction="column"
            px={10}
            w="100%"
            >
                <Heading 
                as="h3"
                my={6}
                mx={3}
                fontSize="3xl"
                fontWeight="500"
                >
                    Start Your Next Project
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
                <PrimaryButton CTA="Submit" />
            </Flex>
    )
}

export default ContactForm