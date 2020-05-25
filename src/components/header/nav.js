import React from 'react'
import { Flex, List } from '@chakra-ui/core';

import theme from '../../themes/theme.js'

import Section from './section.js'

export const navArr = [
    {
      name: "Services",
      href: "/services",
      menuItems: [
        {
          page: "Paint",
          href: "/services/paint"
        },
        {
          page: "Drywall",
          href: "/services/drywall"
        },
        {
          page: "Kitchen & Bath",
          href: "/services/kitchen-bath"
        },
        {
          page: "Electric & Plumbing",
          href: "/services/electric-plumbing"
        },
        {
          page: "Decks",
          href: "/services/decks"
        }
      ]
    },
    {
      name: "Gallery",
      href: "/gallery",
      menuItems: []
    },
    {
      name: "About",
      href: "/about",
      menuItems: []
    },
    {
      name: "Contact",
      href: "/contact",
      menuItems: []
    },
    {
      name: "Blog",
      href: "/blog",
      menuItems: []
    }
  ]
  
  const Nav = () => {

    return (
    <Flex
    alignItems="center"
    justifyContent="center"
    >
        <List
        backgroundColor={theme.mainGray}
        w="100%"
        pl={8}
        >
          {navArr.map(item => (
            <Section name={item.name} href={item.href} menuItems={item.menuItems} />
          ))}
        </List>
    </Flex>
    )
  }

  export default Nav