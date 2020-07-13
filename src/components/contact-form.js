import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { RichText } from 'prismic-reactjs'
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Select
} from '@chakra-ui/core'

import theme from '../themes/theme.js'
import { PrimaryButton, Heading2Alt } from './elements.js'

const ContactForm = () => {
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
            <Flex
            direction="column"
            px={10}
            w="100%"
            >
                <Heading2Alt>
                    Start Your Next Project
                </Heading2Alt>
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
                    <PrimaryButton CTA="Submit" />
            </Flex>
    )
}

export default ContactForm