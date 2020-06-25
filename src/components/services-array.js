import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box } from '@chakra-ui/core';

export const ServicesArray = ({ children }) => {
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
  const servicesArr = data.prismic.allServices_pages.edges.map(item => {
    class NavConstructor {
      constructor(name, href) {
        this.name = name;
        this.href = href;
      }
    }
  return new NavConstructor(item.node.page_name[0].text,`/services/${item.node._meta.uid}`)
  })

  return (
        <>
            <Box data={servicesArr}>
                {children}
            </Box>
        </>
    )
}
