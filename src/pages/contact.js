import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/contact-form'
import { Heading1 } from '../components/elements.js'
import { Flex, Box } from '@chakra-ui/core'


const Contact = () => {
    return (
        <>
        <Layout
        title="Contact"
        description="Let's start your next custom renovation project in Northeast Ohio."
        >
            <Heading1 align="center" pt={true}>
                Contact
            </Heading1>
            <Flex justifyContent="center">
                <Box
                m={{base: "0 0.5rem 1rem 0.5rem", md: "0 4rem 4rem 4rem"}}
                w={{base: "95vw", md: "80vw"}}
                maxW="50rem"
                >
                    <ContactForm />
                </Box>
            </Flex>
        </Layout>
        </>
    )
}

export default Contact
