module.exports = {
  siteMetadata: {
    title: `NW IdolFest`,
    description: `Get ready to experience idol like you never have before! Coming to Seattle in 2021.`,
    author: `The NW IdolFest Team`,
  },
  plugins: [
    `nw-idolfest-theme`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/logo/Logo Pink.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
