// Set the document <html> lang attribute from `siteMetadata.lang` so the
// language is sourced from a single place (used by crawlers / a11y tools).
const { siteMetadata } = require('./gatsby-config')

exports.onRenderBody = ({ setHtmlAttributes }) => {
  const lang = (siteMetadata && siteMetadata.lang) || 'en-GB'
  setHtmlAttributes({ lang })
}
