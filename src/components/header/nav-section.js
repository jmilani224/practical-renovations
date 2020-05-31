import React, { useState } from 'react'
import { ListItem, PseudoBox } from '@chakra-ui/core';
import { Link } from 'gatsby'

import Dropdown from './dropdown.js'
import MenuArrow from './menu-arrow.js';

const NavSection = ({ name, href, menuItems}) => {
    const [drop, setDrop] = useState(false)

    const toggleDrop = () => {
      setDrop(!drop)
    }
    return (
        <ListItem
            display="inline-block"
            fontWeight="500"
            py={4}
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

export const MobileNavSection = ({ name, href, menuItems }) => {

  return (
    <ListItem
            display="block"
            fontSize="xl"
            py={4}
            px={12}
            >
              <Link to={href}>
                  {name}
              </Link>
                {menuItems[0] && menuItems.map(item => (
                  <ListItem
                  display="block"
                  py={4}
                  px={4}
                  >
                    <Link to={item.href}>
                      <PseudoBox
                      _before={{content: "'-'", margin: "0 8px"}}
                      >
                          {item.page}
                      </PseudoBox>
                    </Link>
          
                  </ListItem>
                ))}
            </ListItem>
  )
}

export default NavSection
