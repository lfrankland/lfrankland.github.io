import React from 'react'
import styled from 'styled-components'
import { Container } from './container'
import { Text } from './text'

const SplashWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 0;
  text-align: center;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: flex-end;
    padding: 32px 0;
    text-align: left;
  }
`
export function Splash() {
  return (
    <SplashWrapper>
      <Container>
        <Text as="h1" size="display1" color="white">
          Hey, I'm Louis&hellip;
        </Text>
        <Text as="h2" size="heading3" color="white">
          &hellip;a UI Developer and Designer based in Leeds
        </Text>
        <Text color="white">
          With over 10 years of experience building websites, applications and
          components using HTML, CSS and JS. I have extensive experience as a UX
          Designer which has given me a unique perspective when developing the
          user experiences.
        </Text>
      </Container>
    </SplashWrapper>
  )
}
