import React, { useState } from "react"
import './index.css'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from '../components/index/hero/hero.js'
import BlogFeature from '../components/index/featured-posts/blog-feature.js'
import { Flex } from "@chakra-ui/core"
import { RichText } from 'prismic-reactjs'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        homepage(uid: "homepage", lang: "en-us") {
          meta_description
          page_title
        }
      }
    }
  `)

  const [navOpen, isNavOpen] = useState(false)

  const handleNavOpen = () => {
    isNavOpen(!navOpen);
  }
  
    return (
    <>
    <Layout
    title={data.prismic.homepage.page_title ? RichText.asText(data.prismic.homepage.page_title) : ''}
    description={data.prismic.homepage.meta_description ? RichText.asText(data.prismic.homepage.meta_description) : ''}
    navDisplay={{base: "none", md: "flex"}}
    >

      <Flex
      direction="column"
      >

        <Hero
        navOpen={navOpen}
        handleNavOpen={handleNavOpen}
        />

        <BlogFeature />


      </Flex>
      
    </Layout>
    </>
  )

}

export default IndexPage
