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
          To ensure consistent front-end development in the rapid creation and
          testing of new products and features.
        </Text>

        <Text as="h2" size="heading2">
          The solution
        </Text>

        <Text>
          The{' '}
          <a href="https://virtualcollege.github.io/vc-app-patterns/#/">
            Virtual College Frontend Pattern Library
          </a>{' '}
          was used to rapidly build new features and standardise the development
          process across multiple applications. The goal was to facilitate
          consistency, reusability and reduce maintenance.
        </Text>

        <ProjectImage
          image={patternLibraryScreenshot.childImageSharp.fluid}
          alt="Screenshot of the Pattern Library"
        />

        <Text as="h2" size="heading2">
          Accessibility
        </Text>

        <Text>
          The VC Pattern Library is used for products across different sectors.
          Each component was was built and tested to meet the{' '}
          <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">
            Web Content Accessibility Guidelines (WCAG) AA 2.1 standard
          </a>
          .
        </Text>

        <Text>
          As well as meeting the standards, I also worked to ensure browser
          compatibility by testing components and layouts across multiple
          devices and browsers, identifying and resolving issues efficiently.
        </Text>

        <Text as="h2" size="heading2">
          Methodology
        </Text>

        <Text>
          Each component is made up of HTML and CSS. Using{' '}
          <a href="http://getbem.com/">Block Element Modifier</a> name
          convention to decouple the HTML and CSS. Implementing this provided a
          flat, CSS structure which was more performant, no CSS conflicts and
          ease of code maintenance.
        </Text>

        <Text>
          Starting with the core user interface elements, I added, amended and
          improved the library, ensuring that quality standards were always met.
        </Text>

        <Text as="h2" size="heading2">
          Practice &amp; Adoption
        </Text>

        <Text>
          I facilitated the moving from the legacy front-end system to the
          created, running workshops with fellow developers, helping them
          understand the principles of the pattern library. As well as
          documenting each of the components and the best practice for each, I
          also worked directly on applications to ensure it's smooth deployment.
        </Text>
      </Container>
    </Layout>
  )
}

export default Page
