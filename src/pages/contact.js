import React from 'react'
import Layout from '..//components/layout'
import Contact from '..//components/contact'

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  
  return (
    <Layout location={location} title={siteTitle}>
      <Contact />
    </Layout>
  )
}

export default ContactPage
