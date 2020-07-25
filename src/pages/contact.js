import React from 'react'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Contact } from '../components/contact'
import { GradientBackground } from '../components/gradient-background'

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <GradientBackground>
        <SEO title="Contact" />
        <Contact />
      </GradientBackground>
    </Layout>
  )
}

export default ContactPage
