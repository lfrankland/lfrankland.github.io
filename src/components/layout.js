import React from 'react'
import styled from 'styled-components'
import { Container } from './container'
import { GlobalStyles } from './global-styles'
import { Logo } from './logo'
import { Nav } from './nav'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Header = styled.header`
  background-color: var(--color-light);
  flex: none;
  padding: 16px 0;
  width: 100%;
`

const Body = styled.main`
  flex: 1 auto;
`

const Footer = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-grey);
  flex: none;
  padding: 64px 0;
  text-align: center;
`

export function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Container justify="flex-end">
            <Logo />
            <Nav />
          </Container>
        </Header>
        <Body>{children}</Body>
        <Footer>&copy; Louis Frankland 2020</Footer>
      </Wrapper>
    </>
  )
}
