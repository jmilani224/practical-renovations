import React from "react"

import Nav from './nav.js'
import Logo from './logo.js'
import LoginSignUp from "./login-signup.js"
import { Flex } from "@chakra-ui/core"
import theme from "../../themes/theme.js"

const Header = () => (

  
  <header>
    
    <Flex
    justifyContent="space-between"
    >
      <Logo cls="header" color={theme.mainColor} />

      <LoginSignUp />
    </Flex>

    <Nav />
    
  </header>
)

export default Header
