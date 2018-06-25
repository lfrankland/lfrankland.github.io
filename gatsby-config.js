module.exports = {
  siteMetadata: {
    title: 'Louis Frankland',
    pathPrefix: `/portfolio`,
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cabin\:600,600i`
        ]
      }
    }
  ],
}
