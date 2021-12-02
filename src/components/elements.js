import React from 'react'
import { Button, Heading, Flex, Box, Text, Tag } from '@chakra-ui/core'
import theme from '../themes/theme.js'
import { RichText } from 'prismic-reactjs'
import { BackgroundImageHandler } from '../utils/imageHandlers.js'
import { instagramIcon, facebookIcon } from '../images/svg.js';

export const PrimaryButton = ({ CTA, ref, buttonMargin, onClick, type, w, colorTheme }) => {
    return (
        <Button
        h={10}
        color={colorTheme === "alt"  ? theme.mainColor : "#fff"}
        backgroundColor={colorTheme === "alt"  ? "white" : theme.buttonColor}
        _hover={colorTheme === "alt"  ? { bg : theme.mainGray } : { bg: theme.buttonColorDark }}
        type={type}
        ref={ref}
        onClick={onClick}
        m={buttonMargin}
        w={w}
        >
            {CTA}
        </Button>
    )
}

export const Heading1 = ({ children, align, pt, fontSize }) => {
    return (
        <Heading
          as="h1"
          fontWeight="700"
          fontSize={fontSize || "3rem"}
          color={theme.h1Color}
          lineHeight="1.1"
          mt={4}
          mb={10}
          pt={pt && 4}
          textAlign={align}
          >
          {children}
          </Heading>
    )
}

export const Heading2 = ({ children, align, pt }) => {
  return (
    <Heading
    as="h2"
    fontSize="2xl"
    mb={4}
    color={theme.h2Color}
    pt={pt && 4}
    textAlign={align}
    >
        {children}
    </Heading>
  )
}

export const Heading2Alt = ({ children, align, color }) => {
  return (
    <Heading
    as="h2"
    fontSize="4xl"
    textAlign={align}
    fontWeight="00"
    mt={6}
    color={color || theme.darkGray}
    >
      {children}
    </Heading>
  )
}

export const LongFormText = ({ children }) => {
  return (
    <Text
    className="long-form-text"
    fontSize="1.1rem"
    lineHeight="1.6"
    >
      {children}
    </Text>
  )
}


export const FullWidthImage = ({ headline, fontSize, headingTag, fluid, fallbackImage, height, accordianIconProp }) => {
    
    return (
      <>
        <BackgroundImageHandler
        fluid={fluid}
        fallbackImage={fallbackImage}
        >

            <Flex
            h={height}
            alignItems="center"
            justifyContent="center"
            color="#fff"
            w="100vw"
            >
                <Heading
                as={headingTag}
                fontSize={fontSize}
                fontWeight="400"
                >
                    {headline && RichText.asText(headline)}
                        {accordianIconProp}
                </Heading>
            </Flex>
        </BackgroundImageHandler>
      </>

    )
}

export const SocialIcons = ({color, size}) => {
    const insta = instagramIcon(color)
    const fb = facebookIcon(color)
    const socialArr = [
      { name: insta, url: "https://www.instagram.com/practicalrenovations/" },
      { name: fb, url: "https://www.facebook.com/practicalrenovationsllc/" }
    ]
    return (
      <Flex
      direction="row"
      justifyContent="center"
      >
        {socialArr.map(item => (
          <a key={item.url} href={item.url}>
            <Box
            h={size}
            w={size}
            dangerouslySetInnerHTML={{__html: item.name}}
            mx={2}
            />
          </a>
        ))}
      </Flex>
    )
  }

export const BlogTags = ({ tag }) => {

    const tagColors = {
      'Electrical': "red",
      'Plumbing': "orange",
      'Kitchens': "teal",
      'Decks': "purple",
      'Drywall': "pink",
      'Flooring': "yellow",
      'Bathrooms': "green",
      'Painting': "blue",
      'DIY': "teal",
      'Old Home Tricks': "pink"
    }
    return (<Tag mr={2} mb={2} size="md" variantColor={tagColors[tag]}>{tag}</Tag>)
  }