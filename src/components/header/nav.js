import React, { useEffect, useState } from 'react'
import { Flex, List, CloseButton, Box } from '@chakra-ui/core';

import theme from '../../themes/theme.js'

import NavSection, { MobileNavSection } from './nav-section.js'

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
    display={{base: "none", md: "flex"}}
    >
        <List
        backgroundColor={theme.mainGray}
        w="100%"
        pl={8}
        >
          {navArr.map(item => (
            <NavSection name={item.name} href={item.href} menuItems={item.menuItems} />
          ))}
        </List>
    </Flex>
    )
  }

  export const MobileNav = ({ navOpen, handleNavOpen }) => {
    const [toggleNav, setToggleNav] = useState(false)
    
    useEffect(() => {
      if (navOpen) {
        setToggleNav(true)
      } else {
        setToggleNav(false);
      }
    }, [navOpen])

    return (
      <Flex
      justifyContent="start"
      display={toggleNav ? {base: "flex", md: "none"} : "none"}
      backgroundColor={theme.mainGray}
      w="100vw"
      h="100vh"
      pl={8}
      position="fixed"
      top="0"
      zIndex="1"
      pt={12}
      overflow="scroll"
      >
        <Box
        position="absolute"
        top={4}
        right={4}
        w={10}
        >
          <CloseButton
          size="lg"
          onClick={handleNavOpen}
          />
        </Box>
        
        <List
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
        >
          {navArr.map(item => (
            <MobileNavSection name={item.name} href={item.href} menuItems={item.menuItems} />
          ))}
        </List>
    </Flex>
    )
  }

  export default Nav