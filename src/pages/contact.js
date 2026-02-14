import React from 'react'
import { Layout } from '../components/layout'
import { Seo } from '../components/seo'
import { Contact } from '../components/contact'
import { GradientBackground } from '../components/gradient-background'

const ContactPage = ({ location }) => {
  return (
    <Layout location={location}>
      <GradientBackground>
        <Contact />
      </GradientBackground>
    </Layout>
  )
}

export default ContactPage

export const Head = () => <Seo title="Contact" />
