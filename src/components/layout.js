import React from "react"
import { Box } from "@chakra-ui/core"
import useMobileMenuControl from '../hooks/useMobileMenuControl.js'
import Header from "./header/header.js"
import theme from '../themes/theme.js'
import Footer from "./footer.js"
import MetaData from "./meta-data.js"

const Layout = ({ title, description, children, navDisplay }) => {

  const [navOpen, handleNavOpen] = useMobileMenuControl()

  return (
    <>
        <MetaData title={title} description={description} />
        <Box
        position={navOpen ? "fixed" : "static"}
        backgroundColor={theme.backgroundColor}
        >
          <Header
          navOpen={navOpen}
          handleNavOpen={handleNavOpen}
          navDisplay={navDisplay}
          />

          <main>
            {children}
          </main>

          <Footer />
          
        </Box>
    </>
  )
}

export default Layout
