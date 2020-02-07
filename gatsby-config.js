module.exports = {
  siteMetadata: {
    title: "amoschan.com",
    description: "iOS and Web consultant from Montreal, Quebec",
    author: "Amos Chan",
    siteUrl: "https://amoschan.com",
    social: [
      { name: "twitter", url: "https://twitter.com/amoschan" },
      { name: "github", url: "https://github.com/achan" },
      { name: "linkedin", url: "http://www.linkedin.com/in/amoschan" }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      }
    },
    `gatsby-transformer-remark`
  ]
};
