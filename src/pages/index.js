import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from '../components/container'
import { GradientBackground } from '../components/gradient-background'
import { Layout } from '../components/layout'
import { Project, ProjectGroup } from '../components/project'
import { SEO } from '../components/seo'
import { Skills } from '../components/skills'
import { Splash } from '../components/splash'
import { Text } from '../components/text'
import { Tools } from '../components/tools'

const ProjectsWrapper = styled.div`
  padding: 32px 0;
`

export default function Home() {
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
    <Layout>
      <GradientBackground>
        <SEO title="Home" />

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
                href="/enable-lms"
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
                href="/enable-audit"
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
