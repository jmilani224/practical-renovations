import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { 
  Flex,
  List,
  CloseButton,
  Box,
  ListItem,
  Text,
  PseudoBox
  } from '@chakra-ui/core';
import { Link } from 'gatsby'
import { Animate } from 'react-simple-animate';
import theme from '../../themes/theme.js'
import Phone from './phone.js'
import { SocialIcons } from '../elements.js'

export const navArr = [
    {
      name: "Services",
      href: "/services",
      menuItems: []
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
  
export const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      prismic {
        allServices_pages {
          edges {
            node {
              page_name
              _meta {
                uid
              }
            }
          }
        }
      }
    }
  `)
  
  //Map through Services pages, create an array for the nav dropdown, and append it to navArr > Services > menuItems above
  const servicesNavArr = data.prismic.allServices_pages.edges.map(item => {
    class NavConstructor {
      constructor(name, href) {
        this.name = name;
        this.href = href;
      }
    }
  return new NavConstructor(item.node.page_name[0].text,`/services/${item.node._meta.uid}`)
  })
  navArr[0].menuItems = servicesNavArr
  

    return (
    <Flex
    alignItems="center"
    justifyContent="flex-start"
    display={{base: "none", md: "flex"}}
    backgroundColor={theme.mainGray}
    w="100%"
    pl={4}
    position="relative"
    >
        <List
        
        >
          {navArr.map(item => (
            <NavSection key={item.href} name={item.name} href={item.href} menuItems={item.menuItems} />
          ))}
        </List>
        <Box
        position="absolute"
        right={20}
        h={10}
        w={10}
        display={{base: "none", lg: "block"}}
        >
          <SocialIcons color={theme.textColor}/>
        </Box>
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
      direction="column"
      alignItems="center"
      display={toggleNav ? {base: "flex", md: "none"} : "none"}
      backgroundColor={theme.mainGray}
      w="100vw"
      h="100%"
      position="fixed"
      overflowY="auto !important"
      top="0"
      zIndex="2"
      pt={12}
      pb={6}
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
        <Phone display="flex" />
        <List
        display="flex"
        flexDirection="column"
        justifyContent="start"
        w="100%"
        pt={8}
        >
          {navArr.map(item => (
            <MobileNavSection key={item.href} name={item.name} href={item.href} menuItems={item.menuItems} />
          ))}
        </List>
        <SocialIcons color={theme.textColor} />
          
    </Flex>
    )
  }

const NavSection = ({ name, href, menuItems}) => {
    const [drop, setDrop] = useState(false)

    const toggleDrop = () => {
      setDrop(!drop)
    }
    return (
        <ListItem
            display="inline-block"
            fontWeight="500"
            py={3}
            px={12}
            onMouseEnter={toggleDrop}
            onMouseLeave={toggleDrop}
            >
              <Link to={href}>
                  {name}

                  {menuItems[0] && <MenuArrow drop={drop} />}
              </Link>
                {menuItems[0] && drop && <Dropdown menuItems={menuItems} /> /*if menuItems array is not empty (has dropdown items) and 'drop' is true, show Dropdown*/}
            </ListItem>
    )
}

const MobileNavSection = ({ name, href, menuItems }) => {

  return (
    <ListItem
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontSize="2xl"
            mb={6}
            >
              <Link to={href}>
                  {name}
              </Link>
              <List>
                  {menuItems[0] && menuItems.map((item) => (
                    
                    <ListItem
                    key={item.href}
                    display="flex"
                    justifyContent="center"
                    w="100%"
                    fontSize="xl"
                    mt={3}
                    color={theme.darkGray}
                    >
                      <Link to={item.href}>
                            {item.name}
                      </Link>
            
                    </ListItem>
                  ))}
                </List>
            </ListItem>
  )
}

const Dropdown = ({ menuItems }) => {
    return (
        <Flex
        direction="column"
        position="absolute"
        backgroundColor={theme.mainGray}
        zIndex="2"
        >
            {menuItems.map(item => (
                <Link key={item.href} to={item.href}>
                    <PseudoBox
                    _hover={{bg: theme.mainLight}}
                    >
                        <Text px={6} py={2}>{item.name}</Text>
                    </PseudoBox>
                </Link>
            ))}
        </Flex>
    )
}

const MenuArrow = ({ drop }) => {
    const [play, setPlay] = useState(false)
    
    useEffect(() => {
        drop ? setPlay(true) : setPlay(false)
        
    }, [drop])
    
    return (
        <Flex
        ml={2}
        mb="2px"
        display="inline-block"
        alignItems="center"
        >
            <Animate
            play={play}
            duration={0.2}
            start={{ transform: "rotate(0deg)" }}
            end={{ transform: "rotate(180deg)" }}
            >

                <Box
                w={2}
                h={2}
                borderBottom="2px solid"
                borderRight="2px solid"
                borderColor={theme.textColor}
                transform="rotate(45deg)"
                />
            </Animate>
        </Flex>
    )
}


