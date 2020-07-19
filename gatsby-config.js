module.exports = {
  siteMetadata: {
    title: `Louis Frankland`,
    author: {
      name: `Louis Frankland`,
      summary: `User Experience designer, with extensive experience in producing responsive, accessible and easy to use digital products and services for a wide range of audiences.`,
    },
    description: `Louis Frankland's User Experience Design Portfolio.`,
    siteUrl: `https://louisfrankland.com/`,
    social: {
      twitter: `louisfrankland`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              wrapperStyle: `margin:24px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.2)`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louis Frankland Portfolio`,
        short_name: `Louis Frankland`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#9d3493`,
        display: `minimal-ui`,
        icon: `content/assets/lf-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
