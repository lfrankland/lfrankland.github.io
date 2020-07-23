import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { Container } from '../components/container'
import SEO from '../components/seo'
import Splash from '../components/splash'
import Skills from '../components/skills'
import Tools from '../components/tools'
import { GradientBackground } from '../components/gradient-background'
import { Project, ProjectGroup } from '../components/project'
import { Text } from '../components/text'

const ProjectsWrapper = styled.div`
  padding: 32px 0;
`

const Home = () => {
  const { enableLMSImage, enableAuditImage, vcPatternsImage } = useStaticQuery(
    graphql`
      query {
        enableLMSImage: file(relativePath: { eq: "th-enable-lms.png" }) {
          ...fluidImage
        }
        enableAuditImage: file(relativePath: { eq: "th-enable-audit.png" }) {
          ...fluidImage
        }
        vcPatternsImage: file(relativePath: { eq: "th-vc-patterns.png" }) {
          ...fluidImage
        }
      }
    `
  )

  return (
    <Layout title="Louis's Site">
      <GradientBackground>
        <SEO title="Portfolio" />

        <Splash />

        <Skills />

        <Tools />

        <ProjectsWrapper id="projects">
          <Text as="h2" color="light" size="display2" textAlign="center">
            Projects
          </Text>

          <Container>
            <ProjectGroup>
              <Project
                href="/vc-patterns"
                title="Virtual College Pattern Library"
                image={vcPatternsImage.childImageSharp.fluid}
                description="The VC Pattern Library was used to deliever front-end components across multiple products and services for different sectors and audiences."
                tags={[
                  'HTML',
                  'CSS',
                  'Sass',
                  'Accessibility',
                  'Design',
                  'Documentation',
                  'Adoption',
                ]}
              />

              <Project
                href="/enable-lms-2"
                title="Enable LMS"
                image={enableLMSImage.childImageSharp.fluid}
                description="Faciliating the learning journey for over four million users reach with their personal and career development."
                tags={[
                  'User Experience',
                  'User Interface',
                  'Design',
                  'Wireframes',
                  'Prototyping',
                  'Front-end',
                ]}
              />

              <Project
                href="/enable-audit-2"
                title="Enable Audit"
                image={enableAuditImage.childImageSharp.fluid}
                description="Policy and procedure audit management platform to allow organisations to rapdily create, manage and report."
                tags={[
                  'User Experience',
                  'User Interface',
                  'Design',
                  'Wireframes',
                  'Prototyping',
                  'Front-end',
                  'Usability',
                ]}
              />
            </ProjectGroup>
          </Container>
        </ProjectsWrapper>
      </GradientBackground>
    </Layout>
  )
}

export default Home
