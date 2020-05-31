import React, { useState } from "react"

import Nav, { MobileNav } from './nav.js'
import Logo from './logo.js'
import LoginSignUp from "./login-signup.js"
import { Flex } from "@chakra-ui/core"
import theme from "../../themes/theme.js"
import { MobileMenuIcon } from "./mobile-menu-icon.js"

const Header = ({ navOpen, handleNavOpen }) => {


  return (
    
    <header>
      
      <Flex
      justifyContent="space-between"
      >
        <Logo cls="header" color={theme.mainColor} />

        <LoginSignUp />

        <MobileMenuIcon handleNavOpen={handleNavOpen} />

      </Flex>

      <MobileNav navOpen={navOpen} handleNavOpen={handleNavOpen} />

      <Nav />
      
    </header>
  )
}

export default Header
