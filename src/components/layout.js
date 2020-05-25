import React from "react"

import { Box } from "@chakra-ui/core"

import Header from "./header/header.js"
import theme from '../themes/theme.js'
import Footer from "./footer.js"

const Layout = ({ children }) => {

  return (
    <>
        <Box
        backgroundColor={theme.backgroundColor}
        >
          <Header />

          <main>{children}</main>

          <Footer />
          
        </Box>
    </>
  )
}

export default Layout
