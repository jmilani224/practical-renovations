module.exports = {
  siteMetadata: {
    title: `Practical Renovation LLC`,
    description: `Description goes here.`,
    author: `Joel Milani`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-background-image`,
    `react-images`,
    `react-photo-gallery`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-chakra-ui",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    "react-simple-animate",
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'practical-renovations', // (REQUIRED, replace with your own)
          accessToken: 'MC5YdU1LVkJBQUFDSUFZUXEx.Vh4N77-977-977-9Snnvv73vv71P77-977-977-977-9EO-_vUDvv70077-977-9Fe-_ve-_ve-_vWxO77-9NO-_vWY', // (optional API access token)
          path: '/preview', // (optional preview path. Default: /preview)
          previews: false, // (optional, activated Previews. Default: false)
          pages: [
            { // (optional, builds pages dynamically)
            type: 'Services_page',         // TypeName from prismic - capitalize
            match: '/services/:uid',  // Pages will be generated under this pattern
            path: '/services',        // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/services-template.js'),
            }],
            sharpKeys: [
              /image|photo|picture/, // (default)
              'services_detail_image',
              'hero_background_image',
              'banner_image'
            ],
      },
    },
    "prismic-reactjs"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
