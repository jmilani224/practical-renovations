import React from "react"

import './index.css'

import Layout from "../components/layout"
import Hero from '../components/hero/hero.js'
import BlogFeature from '../components/featured-posts/blog-feature.js'
import { Flex } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>

    <Flex
    direction="column"
    >

      <Hero />

      <BlogFeature />

    </Flex>
    
  </Layout>
)

export default IndexPage
