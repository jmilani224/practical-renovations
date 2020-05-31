import React, { useState } from "react"

import { Box } from "@chakra-ui/core"

import Header from "./header/header.js"
import theme from '../themes/theme.js'
import Footer from "./footer.js"

const Layout = ({ children }) => {

  const [navOpen, isNavOpen] = useState(false)

  const handleNavOpen = () => {
    isNavOpen(!navOpen);
  }

  return (
    <>
        <Box
        position={navOpen ? "fixed" : "static"}
        backgroundColor={theme.backgroundColor}
        >
          <Header navOpen={navOpen} handleNavOpen={handleNavOpen} />

          <main>{children}</main>

          <Footer />
          
        </Box>
    </>
  )
}

export default Layout
