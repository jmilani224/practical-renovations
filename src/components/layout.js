import React from "react"

import Header from "./header/header.js"
import { Box } from "@chakra-ui/core"

import theme from '../themes/theme.js'
const Layout = ({ children }) => {

  return (
    <>
        <Box
        backgroundColor={theme.backgroundColor}
        >
          <Header />

          <main>{children}</main>
          <footer>
            
          </footer>
        </Box>
    </>
  )
}

export default Layout
