module.exports = {
  siteMetadata: {
    title: 'Louis Frankland',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    }
  ],
}
