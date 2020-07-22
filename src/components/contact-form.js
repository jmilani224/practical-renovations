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
    Text,
    Spinner
} from '@chakra-ui/core'

import theme from '../themes/theme.js'
import { PrimaryButton, Heading2Alt } from './elements.js'

const onSubmit = async (event, setSubmitSatus) => {
    event.preventDefault();
    setSubmitSatus("spinner");
    const formElements = [...event.currentTarget.elements];
    const isValid = true
      //formElements.filter(elem => elem.name === "bot-field")[0].value === "";
  
    const validFormElements = isValid ? formElements : [];
  
    if (validFormElements.length < 1) {
      //or some other cheeky error message
      setSubmitSatus("bot");
    } else {
      const filledOutElements = validFormElements
        .filter(elem => !!elem.value)
        .map(
          element =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");
  
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements
      })
        .then(() => {
          setSubmitSatus("check");
        })
        .catch(_ => {
          setSubmitSatus(
            "error"
          );
        });
    }
  };

const ContactForm = () => {
    const [formVisible, setFormVisible] = useState(true)
    const [thankYou, setThankYou] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null);


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
            display={submitStatus ? "none" : "flex"}
            direction="column"
            px={10}
            w="100%"
            >
                <Heading2Alt>
                    Start Your Next Project
                </Heading2Alt>
                    <form
                    name="contact"
                    onSubmit={e => onSubmit(e, setSubmitStatus)}
                    //action="?thanks"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field">
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

            {submitStatus === "spinner" &&
            <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
            }
            
            {submitStatus === "check" &&
            <FormFeedback
            icon="check-circle"
            color="green.500"
            message="Thanks for reaching out. We'll be in touch soon!"
            />
            }

            {submitStatus === "error" &&
            <FormFeedback
            icon="warning"
            color="red.500"
            message="Uh oh, something went wrong. Please reload the page and try again."
            />
            }

            </>
    )
}

export default ContactForm


const FormFeedback = ({ icon, color, message }) => (
    <Flex
            h="100%"
            w="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
            pt={10}
            >
                <Icon mb="2rem" name={icon} size="4rem" color={color}/>
                <Text
                color={theme.lightTextColor}
                fontWeight="600"
                textAlign="center"
                >
                    {message}
                </Text>
            </Flex>
)