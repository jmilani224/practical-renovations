import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select,
    Icon,
    Text
} from '@chakra-ui/core'

import theme from '../themes/theme.js'
import { PrimaryButton, Heading2Alt } from './elements.js'

const ContactForm = () => {
    const [formVisible, setFormVisible] = useState(true)
    const [thankYou, setThankYou] = useState(false)

    const handleFormVisible = () => {
        setFormVisible(!formVisible)
    }

    const handleThankYou = () => {
        setThankYou(!thankYou)
    }

    const handleFormClick = (e) => {
        handleFormVisible();
        handleThankYou();
    }

    useEffect(() => {
        if (window.location.search.includes('thanks')) {
            handleFormVisible();
            handleThankYou();
        }
    }, [])

    const data = useStaticQuery(graphql`
    {
      prismic {
        allServices_pages {
          edges {
            node {
              headline
            }
          }
        }
      }
    }
  `)
    return (
            <>
            <Flex
            display={formVisible ? "flex" : "none"}
            direction="column"
            px={10}
            w="100%"
            >
                <Heading2Alt>
                    Start Your Next Project
                </Heading2Alt>
                    <form name="contact" action="?thanks" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <FormControl m={3} isRequired>
                            <FormLabel htmlFor="fname">First Name</FormLabel>
                            <Input name="First Name" focusBorderColor={theme.mainDark} id="fname" placeholder="First Name" />
                        </FormControl>
                        <FormControl m={3} isRequired>
                            <FormLabel htmlFor="lname">Last Name</FormLabel>
                            <Input name="Last Name" focusBorderColor={theme.mainDark} id="lname" placeholder="Last Name" />
                        </FormControl>
                        <FormControl m={3} isRequired>
                            <FormLabel htmlFor="phone">Phone Number</FormLabel>
                            <Input name="Phone Number" focusBorderColor={theme.mainDark} id="phone" placeholder="Phone Number" />
                        </FormControl>
                        <FormControl m={3} isRequired>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input name="Email Address" focusBorderColor={theme.mainDark} id="email" placeholder="Email Address" />
                        </FormControl>
                        <FormControl m={3} >
                            <Select name="How Can We Help?" focusBorderColor={theme.mainDark} placeholder="How Can We Help?">
                                {data.prismic.allServices_pages.edges.map(service => (
                                    <option value={RichText.asText(service.node.headline)}>{RichText.asText(service.node.headline)}</option>
                                ))}
                            </Select>
                        </FormControl>
                        <Flex justifyContent="center" mt={4} mx={3}>
                            <PrimaryButton CTA="Submit" type="submit" onClick={handleFormClick} w="100%" />
                        </Flex>
                    </form>
            </Flex>

            {thankYou &&
            <Flex
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            pt={10}
            >
                <Icon mb="2rem" name="check-circle" size="4rem" color="green.500"/>
                <Text
                color={theme.lightTextColor}
                fontWeight="600"
                textAlign="center"
                >
                    Thanks for reaching out. We'll be in touch soon!
                </Text>
            </Flex>}

            </>
    )
}

export default ContactForm