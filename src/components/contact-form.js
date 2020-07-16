import React, { useState } from 'react'
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
        //e.preventDefault()
    }

    console.log(formVisible)
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
                    <form name="contact" action="#" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
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
                                {data.prismic.allServices_pages.edges.map(service => (
                                    <option value={RichText.asText(service.node.headline)}>{RichText.asText(service.node.headline)}</option>
                                ))}
                            </Select>
                        </FormControl>
                        <PrimaryButton CTA="Submit" type="submit" onClick={handleFormClick} w="calc(100% - 34px)" />
                    </form>
            </Flex>

            {thankYou &&
            <Flex
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
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