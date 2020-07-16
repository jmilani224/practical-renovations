import React from 'react'
import { Button, Heading, Flex, Box, Text, Tag } from '@chakra-ui/core'
import theme from '../themes/theme.js'
import { RichText } from 'prismic-reactjs'
import { BackgroundImageHandler } from '../utils/imageHandlers.js'
import { instagramIcon, facebookIcon } from '../images/svg.js';

export const PrimaryButton = ({ CTA, ref, buttonMargin, onClick, type, w }) => {
    return (
        <Button
        h={10}
        color="#fff"
        backgroundColor={theme.buttonColor}
        _hover={{ bg: theme.buttonColorDark }}
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

export const Heading1 = ({ children, align, pt }) => {
    return (
        <Heading
          as="h1"
          fontWeight="700"
          fontSize="3rem"
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

export const Heading2Alt = ({ children, align }) => {
  return (
    <Heading
    as="h2"
    fontSize="4xl"
    textAlign={align}
    fontWeight="00"
    mt={6}
    color={theme.darkGray}
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
      { name: insta, url: "#" },
      { name: fb, url: "https://www.facebook.com/practicalrenovationsllc/" }
    ]
    return (
      <Flex
      direction="row"
      justifyContent="center"
      >
        {socialArr.map(item => (
          <a href={item.url}>
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
    let color
    switch (tag) {
      case 'Electrical':
        color="red";
        break;
      case 'Plumbing':
        color="orange";
        break;
      case 'Kitchens':
        color="teal";
        break;
      case 'Decks':
        color="purple";
        break;
      case 'Drywall':
        color="pink";
        break;
      case 'Flooring':
        color="yellow";
        break;
      case 'Bathrooms':
        color="green";
        break;
      case 'Painting':
        color="blue";
        break;
      case 'Drywall':
        color="cyan";
        break;
      case 'DIY':
        color="teal";
        break;
      case 'Old Home Tricks':
        color="pink";
        break;
  }
    return (
      <Tag mr={2} mb={2} size="md" variantColor={color}>{tag}</Tag>
    )
  }