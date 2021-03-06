const path = require("path")
const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Donny Layug - Freelance Web Developer | Web Designer | Philippines`,
    description: `Official Portfolio created with Gatsby and React. Freelance Web Developer and Designer.`,
    author: `Donny Layug`,
    image: `src/images/officialportfolio.jpg`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-147712146-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Portfolio`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/anotherlogo_darkgreen.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`tw cen mt\:300,400,700`, `prompt\:300,400,700`],
        display: `swap`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@styles": path.resolve(__dirname, "src/styles"),
          "@pages": path.resolve(__dirname, "src/pages"),
        },
      },
    },
    "gatsby-plugin-svgr",
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1,
        once: true,
      },
    },
  ],
}
