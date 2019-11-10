import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header/Header'
import HomeHero from '../components/HomeHero/HomeHero'
import Skills from '../components/Skills/Skills'
import Tools from '../components/Tools/Tools'
import Projects from '../components/Projects/Projects'

const IndexPage = () => (
  <Layout>
    <Header />
    <HomeHero />
    <Skills />
    <Tools />
    <Projects />
  </Layout>
)

export default IndexPage
