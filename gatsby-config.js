module.exports = {
  siteMetadata: {
    title: `Louis Frankland`,
    author: {
      name: `Louis Frankland`,
      summary: `Louis Frankland is a UI Developer and Designer with experience building websites, applications and components using HTML, CSS and JS.`,
    },
    description: `Louis Frankland's UI Developer Portfolio.`,
    siteUrl: `https://louisfrankland.com/`,
    social: {
      twitter: `louisfrankland`,
    },
  },
  plugins: [
    // Gatsby has built-in Head API — remove react-helmet plugin
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
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
        start_url: `/`,
        background_color: `#9d3493`,
        theme_color: `#9d3493`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/images/profile-round.png`,
      },
    },
  ],
}
