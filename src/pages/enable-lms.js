import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Seo } from '../components/seo'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { ProjectHeader } from '../components/project-header'
import { ProjectImage } from '../components/project-image'
import { TagGroup, Tag } from '../components/tags'
import { Text } from '../components/text'

export default function EnableLmsPage() {
  const {
    certificateScreenshot,
    dashboardScreenshot,
    groupScreenshot,
    learningPlanScreenshot,
  } = useStaticQuery(
    graphql`
      query {
        certificateScreenshot: file(
          relativePath: { eq: "certificate-editor.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        dashboardScreenshot: file(
          relativePath: { eq: "enable-lms-dashboard.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        groupScreenshot: file(relativePath: { eq: "group-members.png" }) {
          ...fluidImage
        }
        learningPlanScreenshot: file(
          relativePath: { eq: "learning-plan.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  return (
    <Layout title="Page">
      <ProjectHeader>
        
        <Container size="small">
          <Text as="h1" size="display1" color="white">
            Enable LMS
          </Text>

          <Text color="white">
            Faciliating the learning journey for over four million users,
            helping them with their personal and career development.
          </Text>

          <TagGroup>
            <Tag>User Interface</Tag>
            <Tag>User Experience</Tag>
            <Tag>Design</Tag>
            <Tag>Front-end</Tag>
            <Tag>Wireframes</Tag>
            <Tag>Prototyping</Tag>
          </TagGroup>
        </Container>
      </ProjectHeader>

      <Container size="small">
        <Text as="h2" size="heading2">
          About Enable LMS
        </Text>

        <Text>
          The Enable LMS is an enterprise-level learning platform, designed to
          facilitate the eLearning delivery across many different sectors and
          audiences, from individual learners to multi-national organisations.
          My goal was to ensure it could meet all these needs effectively,
          giving learners, training professionals and Virtual College staff the
          tools and abilities to exceed their expectations.
        </Text>

        <Text as="h3" size="heading3">
          Key features
        </Text>

        <Text>
          The learning platform had the following features which I designed:
        </Text>

        <Text as="ul">
          <li>
            <strong>Learning creation</strong> &ndash; Assessments, evaluations,
            certificate and course editing
          </li>
          <li>
            <strong>Learning management</strong> &ndash; Automated allocating
            courses, categories, reporting
          </li>
          <li>
            <strong>Group and user management</strong> &ndash; User profiles,
            facilitating allocating, resource management and discussions
          </li>
          <li>
            <strong>Job role management</strong> &ndash; Creating and managing
            employee appraisals
          </li>
          <li>
            <strong>Event management</strong> &ndash; Event creation, inviting,
            management, registering and reporting
          </li>
          <li>
            <strong>Internationalisation</strong> &ndash; Supporting multiple
            langauages, including Arabic, right-to-left direction text
          </li>
          <li>
            <strong>System management</strong> &ndash; Customer feature
            management, branding, registration, course licencing
          </li>
        </Text>

        <ProjectImage
          image={getImage(dashboardScreenshot)}
          alt="Screenshot of the Enable LMS Dashboard"
        />

        <Text as="h2" size="heading2">
          Background
        </Text>

        <Text>
          It was identified that the Virtual College’s Enable LMS platform
          needed rebuilding from the ground up to replace the existing system.
          The key tenets were that the new system had to be responsive for
          multiple device types and accessible for a varied audience.
        </Text>

        <Text as="h2" size="heading2">
          My role
        </Text>

        <Text>
          UI Development, UI Design, HTML, CSS, Sass, User Research, UX,
          Personas, Design Documentation
        </Text>

        <Text as="h2" size="heading2">
          Research
        </Text>

        <Text>
          As Virtual College had an existing system, we quickly identified the
          core functionality we would need to replace. Speaking to customers,
          stakeholders and the wider organisation, we prioritised these to
          deliverable features which were designed and developed.
        </Text>

        <ProjectImage
          image={getImage(certificateScreenshot)}
          alt="Screenshot of the Certificate Editor"
        />

        <Text as="h2" size="heading2">
          Conceptualization
        </Text>

        <Text>
          For each of the key features, I facilitated the ideation process
          amongst product owners and developers. Creating wireframes from these
          workshops which then fedback into iterative workshops to define the
          solution we would deliever.
        </Text>

        <ProjectImage
          image={getImage(groupScreenshot)}
          alt="Screenshot of the Group Management"
        />

        <Text as="h2" size="heading2">
          Design
        </Text>

        <Text>
          As well as designing each of the features, I also kept a holistic view
          of the application, ensuring that existing features could be utilised
          where appropriate. I also implemented a rebrand of Enable LMS when the
          organisation's brand was updated, ensuring it still met our
          accessibility targets.
        </Text>

        <ProjectImage
          image={getImage(learningPlanScreenshot)}
          alt="Screenshot of the Automated Learning Plans"
        />

        <Text as="h2" size="heading2">
          Frontend
        </Text>

        <Text>
          Conceptualising all features such as learner management, including
          powerful automation, course editing, including assessment and
          evaluation tools, resource management and many other intrinsic parts
          of the platform.
        </Text>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="Enable LMS" />
