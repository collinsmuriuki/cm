require("dotenv").config()

const siteMetadata = {
  title: `0x434d`,
  description: `Understanding the universe and explaining it to a three-year-old.`,
  author: `Collins Muriuki`,
  feature: {
    siteName: `GitHub`,
    url: `https://github.com/collinsmuriuki`,
  },
  quote: {
    author: `J.R.R. Tolkien`,
    content: `Not all those who wander are lost.`,
    source: `The Fellowship of the Ring`,
  },
  contactInfo: `I will typically respond within 24-48 hours`,
  email: `murerwacollins@gmail.com`,
  twitter: `collinsmuriuki_`,
  siteUrl: `https://muriuki.tk`,
  image: `/DoogieDoodle.png`,
  projectsInfo: `A variety pf projects I have worked on. They vary from command-line
  tools, libraries to web apps.`,
}

const plugins = [
  `gatsby-plugin-styled-components`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-sitemap`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js")],
    },
  },
  {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.STRAPI_URL || `http://localhost:1337`,
      queryLimit: 1000,
      contentTypes: [`blogs`, `projects`],
      singleTypes: [`bio`],
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS,
    },
  },
  {
    resolve: `gatsby-plugin-disqus`,
    options: {
      shortname: process.env.DISQUS,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: `https://muriuki.tk`,
      sitemap: `https://muriuki.tk/sitemap.xml`,
      policy: [{ userAgent: `*`, allow: `/` }],
    },
  },
]

module.exports = {
  siteMetadata,
  plugins,
}
