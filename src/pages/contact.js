import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import { Heading1 } from '../components/elements.js'
import { Flex, Box } from '@chakra-ui/core'

const Contact = () => {
    return (
        <Layout>
            <Heading1 align="center" pt={true}>
                Contact
            </Heading1>
            <Flex justifyContent="center">
                <Box
                m="0 4rem 4rem 4rem"
                w="80vw"
                maxW="50rem"
                >
                    <ContactForm />
                </Box>
            </Flex>
        </Layout>
    )
}

export default Contact