import React from "react"
import './index.css'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from '../components/hero/hero.js'
import BlogFeature from '../components/featured-posts/blog-feature.js'
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

    return (
    <>
    <Layout
    title={data.prismic.homepage.page_title ? RichText.asText(data.prismic.homepage.page_title) : ''}
    description={data.prismic.homepage.meta_description ? RichText.asText(data.prismic.homepage.meta_description) : ''}
    >

      <Flex
      direction="column"
      >

        <Hero />

        <BlogFeature />

      </Flex>
      
    </Layout>
    </>
  )

}

export default IndexPage
