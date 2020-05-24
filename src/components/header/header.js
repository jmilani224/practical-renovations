import React from "react"

import Nav from './nav.js'
import Logo from './logo.js'
import LoginSignUp from "./login-signup.js"
import { Flex } from "@chakra-ui/core"

const Header = () => (

  
  <header>
    
    <Flex
    justifyContent="space-between"
    >
      <Logo />

      <LoginSignUp />
    </Flex>

    <Nav />
    
  </header>
)

export default Header
