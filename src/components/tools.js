import React from 'react'
import styled from 'styled-components'
import { Text } from './text'

const ToolsWrapper = styled.div`
  padding: 32px 0;
`

const ToolList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin: auto;
  max-width: var(--max-width);
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

const Tools = () => (
  <ToolsWrapper>
    <Text as="h2" size="display2" textAlign="center" color="white">
      Tools &amp; Technologies
    </Text>
    <ToolList>
      <Tool>
        <img src={'/logos/html5.svg'} alt="HTML5" />
      </Tool>
      <Tool>
        <img src={'/logos/css3.svg'} alt="CSS3" />
      </Tool>
      <Tool>
        <img src={'/logos/sass.svg'} alt="Sass" />
      </Tool>
      <Tool>
        <img src={'/logos/gatsby.svg'} alt="GatsbyJS" />
      </Tool>
      <Tool>
        <img src={'/logos/react.svg'} alt="React" />
      </Tool>
      <Tool>
        <img src={'/logos/styled-components.png'} alt="Styled Components" />
      </Tool>
      <Tool>
        <img src={'/logos/illustrator.svg'} alt="Illustrator" />
      </Tool>
      <Tool>
        <img src={'/logos/photoshop.svg'} alt="Photoshop" />
      </Tool>
    </ToolList>
  </ToolsWrapper>
)

export default Tools
