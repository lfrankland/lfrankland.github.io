import React from 'react'
import styled, { keyframes } from 'styled-components'

const animatedGradient = keyframes`
	0%{ background-position:0% 50% }
	50%{ background-position:100% 50% }
	100%{ background-position:0% 50% }
`

const Header = styled.header`
	background: var(--main-gradient);
	background-size: 400% 400%;
	color: var(--color-light);
	padding: 64px 0;
	animation: ${animatedGradient} 24s ease infinite;
`

const Wrapper = styled.div`
	max-width: 720px;
	margin: auto;
	padding: 0 32px;
`

const Title = styled.h1`
	font-size: 4em;
	margin-bottom: 0;
`

const Description = styled.p`
	font-size: 1.2em;
	margin-bottom: 0;
`

export function BlogHeader ({ title, description }){
	return (
		<Header>
			<Wrapper>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Wrapper>
		</Header>
	)
}
