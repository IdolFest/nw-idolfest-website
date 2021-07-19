require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `NW IdolFest`,
    siteUrl: 'https://nwidolfest.com',
    description: `Get ready to experience idol like you never have before! Coming to the Seattle Airport DoubleTree on Nov 13-14, 2021.`,
    author: `The NW IdolFest Team`,
    social: {
      twitter: '@NWIdolFest',
      facebook: 'NWIdolFest',
      instagram: 'NWIdolFest'
    },
    badgeTiers: [
      { 
        tierName: 'Attendee',
        tierPrice: '$30'
      },
      {
        tierName: 'Sponsor',
        tierPrice: '$70'
      },
      {
        tierName: 'Super Sponsor',
        tierPrice: '$350'
      }
    ],
  },
  plugins: [
    `nw-idolfest-theme`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-XPTSB6WENM",
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@images": "src/images",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@theme": "plugins/nw-idolfest-theme",
          "@pages": "src/pages"
        },
        extensions: [
          "js",
        ],
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
        precision: 6,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NW IdolFest`,
        short_name: `nwidolfest`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon/Icon-Pink.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
