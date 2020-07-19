import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const LayoutContainer = styled.div`
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
		<LayoutContainer>
			<LayoutHeader />
			<LayoutMain>
			{children}
			</LayoutMain>
			<LayoutFooter />
		</LayoutContainer>
	)
}
