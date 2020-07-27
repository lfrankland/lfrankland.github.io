import React from 'react'
import styled from 'styled-components'
import { Container } from './container'
import { Text } from './text'

const Wrapper = styled.div`
  padding: 32px 0;
`

const SkillGroup = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  width: 100%;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-left: 0;
  min-width: 0;
  padding: 32px;
  text-align: center;

  @media (min-width: 400px) {
    flex-direction: row;
  }
`

const Details = styled.div`
  margin: 16px 0 0 0;

  @media (min-width: 400px) {
    margin: 0 0 0 32px;
    text-align: left;
  }
`

const Icon = styled.img`
  width: 80px;
  min-width: 80px;
`

export function Skills() {
  return (
    <Wrapper>
      <Container>
        <SkillGroup>
          <Skill>
            <Icon src="/icons/html5.svg" alt="HTML5 Icon" />
            <Details>
              <Text as="h3" size="heading4">
                HTML &amp; CSS
              </Text>
              <Text size="body2">
                Strong understanding of modern semantic HTML &amp; CSS
                principles and practices to ensure W3C valid code for all
                devices.
              </Text>
            </Details>
          </Skill>

          <Skill>
            <Icon src="/icons/javascript.svg" alt="JavaScript Icon" />
            <Details>
              <Text as="h3" size="heading4">
                JavaScript
              </Text>
              <Text size="body2">
                Experience with GatsbyJS, Styled Components and React. Keen to
                further expand my knowledge and skills while applying my UX
                expertise to this area.
              </Text>
            </Details>
          </Skill>

          <Skill>
            <Icon src="/icons/accessibility.svg" alt="JavaScript Icon" />
            <Details>
              <Text as="h3" size="heading4">
                Accessibility
              </Text>
              <Text size="body2">
                I believe that every user deserves a good experience, and
                champion that this is the case for people who use assistive
                technologies. I have a deep understanding of the W3C WCAG
                specification.
              </Text>
            </Details>
          </Skill>

          <Skill>
            <Icon src="/icons/methodologies.svg" alt="Methodologies Icon" />
            <Details>
              <Text as="h3" size="heading4">
                Methodologies
              </Text>
              <Text size="body2">
                Introduced CSS methodologies across development projects and
                teams for consistent and maintainable front-end code.
              </Text>
            </Details>
          </Skill>

          <Skill>
            <Icon src="/icons/ui-design.svg" alt="UI Design Icon" />
            <Details>
              <Text as="h3" size="heading4">
                User-centered design
              </Text>
              <Text size="body2">
                Working with others as part of an agile team or independently to
                produce user-focused products from ideas, to wireframes to final
                production ready code.
              </Text>
            </Details>
          </Skill>

          <Skill>
            <Icon src="/icons/usability.svg" alt="Usability Icon" />
            <Details>
              <Text as="h3" size="heading4">
                Usability testing
              </Text>
              <Text size="body2">
                Devising, carrying out, reviewing and analysing usability
                testing sessions on core commercial user journeys.
              </Text>
            </Details>
          </Skill>
        </SkillGroup>
      </Container>
    </Wrapper>
  )
}
