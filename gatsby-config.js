module.exports = {
  siteMetadata: {
    title: `Louis Frankland`,
    author: {
      name: `Louis Frankland`,
      summary: `UI Developer and Designer with experience building websites, applications and components using HTML, CSS and JS.`,
    },
    description: `Louis Frankland's UI Developer Portfolio.`,
    siteUrl: `https://louisfrankland.com/`,
    social: {
      twitter: `louisfrankland`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Louis Frankland Portfolio`,
        short_name: `Louis Frankland`,
        description: `Louis Frankland is a Leeds based UI Designer and Developer focused on creating user-centric experiences.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3a6ea4`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/louis-circle.png`,
      },
    },
  ],
}
