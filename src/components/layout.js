import React from "react"
import styled, { keyframes } from "styled-components"
import Header from "./header"
import Footer from "./footer"


const AnimatedGradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const LayoutContainer = styled.div`
  animation: ${AnimatedGradient} 24s ease infinite;
  background: var(--main-gradient);
  background-size: 400% 400%;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const LayoutMain = styled.main`
  flex: 1 auto;
`

const LayoutHeader = styled(Header)`
  flex: none;
`

const LayoutFooter = styled(Footer)`
  flex: none;
`

export default function Layout({ children }) {
  return (
    <>
      <LayoutContainer>
        <LayoutHeader />
        <LayoutMain>{children}</LayoutMain>
        <LayoutFooter />
      </LayoutContainer>
    </>
  )
}
