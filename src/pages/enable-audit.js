import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from '../components/seo'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { ProjectHeader } from '../components/project-header'
import { ProjectImage } from '../components/project-image'
import { TagGroup, Tag } from '../components/tags'
import { Text } from '../components/text'

export default function EnableAuditPage() {
  const {
    editorScreenshot,
    overviewScreenshot,
    questionScreenshot,
  } = useStaticQuery(
    graphql`
      query {
        editorScreenshot: file(relativePath: { eq: "audit-editor.png" }) {
          ...fluidImage
        }
        overviewScreenshot: file(relativePath: { eq: "audit-overview.png" }) {
          ...fluidImage
        }
        questionScreenshot: file(relativePath: { eq: "audit-question.png" }) {
          ...fluidImage
        }
      }
    `
  )

  return (
    <Layout title="Page">
      <SEO title="Enable Audit" />
      <ProjectHeader>
        <Container size="small">
          <Text as="h1" size="display1" color="white">
            Enable Audit
          </Text>

          <Text color="white">
            Policy and procedure audit management platform to allow
            organisations to rapdily create, manage and report.
          </Text>

          <TagGroup>
            <Tag>User Interface</Tag>
            <Tag>User Experience</Tag>
            <Tag>Design</Tag>
            <Tag>Wireframes</Tag>
            <Tag>Prototyping</Tag>
            <Tag>Front-end</Tag>
            <Tag>Usability</Tag>
          </TagGroup>
        </Container>
      </ProjectHeader>

      <Container size="small">
        <Text as="h2" size="heading2">
          The challenge
        </Text>

        <Text>
          Allowing organisations to remotely carry out in-depth audits of
          polices and procedures across multiple sectors and audiences.
        </Text>

        <Text as="h2" size="heading2">
          My role
        </Text>

        <Text>
          User Research, User Experience Design, Personas, Documentation,
          Frontend, HTML, CSS, Sass
        </Text>

        <Text as="h2" size="heading2">
          Background
        </Text>

        <Text>
          Enable Audit arose after speaking with existing customers and
          identifying a need for them to track their compliance across multiple
          locations in a data-secure manner. They were doing this by paper or
          spreadsheets which had a high administration burden and low return
          rate from those asked to complete them.
        </Text>

        <Text as="h2" size="heading2">
          Research
        </Text>

        <Text>
          As well as reviewing competitors, we carried out surveys for customers
          and conducted user interviews to gain a holistic view of the
          processes, bottlenecks and how they perceived them. From these
          interviews and surveys.
        </Text>

        <ProjectImage
          fluid={overviewScreenshot.childImageSharp.fluid}
          alt="Screenshot of the Audit Overview"
        />

        <Text as="h2" size="heading2">
          Conceptualization
        </Text>

        <Text>
          From the research, user personas, journey maps and workflows were
          produced as part of an agile team. Facilitating multiple workshops
          with developers, product owners and stakeholders to gain a broad
          perspective about what was possible and identify where value could be
          most gained.
        </Text>

        <ProjectImage
          fluid={questionScreenshot.childImageSharp.fluid}
          alt="Screenshot of the Audit Question"
        />

        <Text as="h2" size="heading2">
          Wireframing and prototyping
        </Text>

        <Text>
          Working iteratively to create paper wireframes in the early stages and
          getting regular feedback from members of the team and potential
          clients. These evolved into interactive wireframes, which allowed the
          product and development team to understand the solution we were aiming
          to build. As the process evolved, I worked closely with the product
          owner to document each of the features so they can be developed as
          part of an agile team.
        </Text>

        <ProjectImage
          fluid={editorScreenshot.childImageSharp.fluid}
          alt="Screenshot of the Audit Editor"
        />

        <Text as="h2" size="heading2">
          Frontend development
        </Text>

        <Text>
          As well as designing the product, I also developed the frontend. This
          involved building new components and revising others for the Virtual
          College Pattern Library. The components were hand coded in HTML and
          Sass with each one tested for accessibility, compatibility and
          performance. I coached the development team to ensure best practice
          was used when implementing these in the final code.
        </Text>
      </Container>
    </Layout>
  )
}
