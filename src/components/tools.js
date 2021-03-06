import React from 'react'
import styled from 'styled-components'
import { Text } from './text'

const Wrapper = styled.div`
  padding: 32px 0;
`

const ToolGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: auto;
  max-width: var(--max-width);
  padding: 0;
`

const Tool = styled.li`
  align-items: center;
  background-color: var(--color-light);
  border-radius: 50%;
  display: flex;
  height: 96px;
  justify-content: center;
  margin: 8px 24px;
  padding: 16px;
  width: 96px;

  img {
    max-width: 100%;
  }
`

export function Tools() {
  return (
    <Wrapper>
      <Text as="h2" size="display2" textAlign="center" color="white">
        Tools &amp; Technologies
      </Text>

      <ToolGroup>
        <Tool>
          <img src="/logos/html5.svg" alt="HTML5" />
        </Tool>

        <Tool>
          <img src="/logos/css3.svg" alt="CSS3" />
        </Tool>

        <Tool>
          <img src="/logos/sass.svg" alt="Sass" />
        </Tool>

        <Tool>
          <img src="/logos/gatsby.svg" alt="GatsbyJS" />
        </Tool>

        <Tool>
          <img src="/logos/react.svg" alt="React" />
        </Tool>

        <Tool>
          <img src="/logos/styled-components.png" alt="Styled Components" />
        </Tool>

        <Tool>
          <img src="/logos/illustrator.svg" alt="Illustrator" />
        </Tool>

        <Tool>
          <img src="/logos/photoshop.svg" alt="Photoshop" />
        </Tool>
      </ToolGroup>
    </Wrapper>
  )
}
