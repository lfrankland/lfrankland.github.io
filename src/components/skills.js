import React from 'react'
import styled from 'styled-components'
import { Container } from './container'
import { Text } from './text'

const Wrapper = styled.div`
  padding: 32px 0;
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  margin: 0;
  padding: 0;
  width: 100%;
  grid-gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`

const Skill = styled.li`
  background-color: var(--color-light);
  border-radius: 12px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  color: var(--color-dark);
  margin-left: 0;
  min-width: 0;
  padding: 32px;
  list-style: none;
`

const Skills = () => (
  <Wrapper>
    <Container>
      <List>
        <Skill>
          <Text as="h3" size="heading4">
            User-centered design
          </Text>
          <Text size="body2">
            Working with others as part of an agile team or independently to
            produce user-focused products from ideas, to wireframes to final
            production ready code.
          </Text>
        </Skill>
        <Skill>
          <Text as="h3" size="heading4">
            Accessibility
          </Text>
          <Text size="body2">
            I believe that every user deserves a good experience, and champion
            that this is the case for people who use assistive technologies. I
            have a deep understanding of the W3C WCAG specification.
          </Text>
        </Skill>
        <Skill>
          <Text as="h3" size="heading4">
            HTML &amp; CSS
          </Text>
          <Text size="body2">
            Strong understanding of modern semantic HTML &amp; CSS principles
            and practices to ensure W3C valid code for all devices.
          </Text>
        </Skill>
        <Skill>
          <Text as="h3" size="heading4">
            JavaScript
          </Text>
          <Text size="body2">
            Experience with GatsbyJS, Styled Components and React. Keen to
            further expand my knowledge and skills and apply my UX expertise to
            this area.
          </Text>
        </Skill>
        <Skill>
          <Text as="h3" size="heading4">
            Methodologies
          </Text>
          <Text size="body2">
            Introduced CSS methodologies across development projects and teams
            for consistent and maintainable front-end code.
          </Text>
        </Skill>
        <Skill size="body2">
          <Text as="h3" size="heading4">
            Usability testing
          </Text>
          <Text size="body2">
            Devising, carrying out, reviewing and analysing usability testing
            sessions on core commercial user journeys.
          </Text>
        </Skill>
      </List>
    </Container>
  </Wrapper>
)

export default Skills
