import React from "react"

import './index.css'

import Layout from "../components/layout"
import ContactForm from "../components/contact-form"
import { Flex } from "@chakra-ui/core"
import BlogFeature from "../components/featured-posts/blog-feature"

const IndexPage = () => (
  <Layout>
    <Flex
    justifyContent="center"
    py={8}
    >
      <ContactForm />
      <BlogFeature />
    </Flex>
  </Layout>
)

export default IndexPage
