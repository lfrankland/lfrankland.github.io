import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Text } from '../components/text'
import { TagGroup, Tag } from '../components/tags'
import { ProjectHeader } from '../components/project-header'
import { ProjectImage } from '../components/project-image'
import Layout from '../components/layout'
import { Container } from '../components/container'

const Page = () => {
  const { patternLibraryScreenshot } = useStaticQuery(
    graphql`
      query {
        patternLibraryScreenshot: file(
          relativePath: { eq: "pattern-library.png" }
        ) {
          ...fluidImage
        }
      }
    `
  )

  return (
    <Layout title="Page">
      <ProjectHeader>
        <Container size="small">
          <Text as="h1" size="display1" color="white">
            VC Pattern Library
          </Text>
          <Text color="white">
            The VC Pattern Library was used to deliever front-end components
            across multiple products and services for different sectors and
            audiences.
          </Text>
          <TagGroup>
            <Tag>HTML</Tag>
            <Tag>CSS Experience</Tag>
            <Tag>Sass</Tag>
            <Tag>Accessibility</Tag>
            <Tag>Design</Tag>
            <Tag>Documentation</Tag>
            <Tag>Coaching</Tag>
          </TagGroup>
        </Container>
      </ProjectHeader>

      <Container size="small">
        <Text as="h2" size="heading2">
          The challenge
        </Text>

        <Text>
          Working at Virtual College the product and development team were
          running into issues of inflated CSS files, inconsistent application of
          front-end code and trouble identifying and resolving issues quickly
          and effectively.
        </Text>
        <Text>
          Researching different best practices of how to resolve this, I settled
          on creating a{' '}
          <a href="https://virtualcollege.github.io/vc-app-patterns/#/">
            frontend pattern library
          </a>
          .
        </Text>

        <Text as="h2" size="heading2">
          Research
        </Text>

        <Text>
          To help solve the common design and development problems, I first
          investigated what solutions could and would work for the current
          development team and how best to integrate into existing projects and
          ensure that it would be reusable for future work. Reviewing some of
          the more popular and seeing how they were put together from both a
          design and development perspective.
        </Text>

        <Text as="h2" size="heading2">
          Breaking down the components
        </Text>
        <Text>
          Once I settled on creating the pattern library, the first task was to
          break down the UI into separate components. This involved reviewing
          the existing views and identifying the shared elements across
          different applications and understanding all the use cases and states
          they could be in. Starting with the most basic elements such as
          buttons, inputs, typography, I defined, designed and documented each
          in HTML and CSS.
        </Text>

        <ProjectImage
          image={patternLibraryScreenshot.childImageSharp.fluid}
          alt="Screenshot of the Pattern Library"
        />

        <Text as="h2" size="heading2">
          Accessibility
        </Text>

        <Text>
          One of the key benefits of the pattern library was the ability to
          decouple the front-end from back-end code. This allowed me to test
          each component for accessibility and ensure it met the{' '}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            Web Content Accessibility Guidelines (WCAG) AA 2.1 standard
          </a>
          .
        </Text>

        <Text>
          As well as meeting the accessibility standards, I also worked to
          ensure browser compatibility by testing components and layouts across
          multiple devices and browsers, identifying and resolving issues
          efficiently.
        </Text>

        <Text as="h2" size="heading2">
          Methodology
        </Text>

        <Text>
          As well as researching pattern libraries, I also looked into different
          front-end methodologies. Experimenting with Atomic, OOCSS and SMACC, I
          settled on using{' '}
          <a href="http://getbem.com/">Block Element Modifier</a>. This gave me
          a flat CSS structure which was performant, stopped CSS conflicts and
          helped with code readability.
        </Text>

        <Text as="h2" size="heading2">
          Build
        </Text>

        <Text>
          To help with the maintainability of the pattern library, I used Sass
          to help manage consistent colours, sizes, breakpoints and more across
          the patterns. As well as building the deliverable code which was
          passed onto other developers, I also produced a documentation site,
          which detailed each of the available components, explaining what they
          are used for, code examples and the different modifiers available.
        </Text>

        <Text as="h2" size="heading2">
          Practice &amp; Adoption
        </Text>

        <Text>
          Once the pattern library was in a deliverable state, I facilitated the
          move from the legacy front-end system. I ran workshops with other
          developers, explaining the principles of the pattern library and how
          to get the best out of it. I also worked directly on applications to
          ensure the smooth deployment of new components.
        </Text>
      </Container>
    </Layout>
  )
}

export default Page
