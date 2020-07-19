import React from 'react'
import Container from './container'
import styled from 'styled-components'

const SplashWrapper = styled.div`
	align-items: center;	
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 32px 64px;
	text-align: center;

	@media (min-width: 640px) {
		align-items: flex-start;
		justify-content: flex-end;			
		padding: 64px;
	}
`
const Title = styled.h1`
	font-size: 2rem;
	line-height: 1;
	margin-bottom: 16px;
	text-decoration: none;

	@media (min-width: 640px) {
		font-size: 4rem;
		text-align:left;
	}
`

const SubTitle = styled.h2`
	font-size: 1.2rem;
	line-height: 1.4;
	margin-bottom: 16px;

	@media (min-width: 640px) {
		font-size: 1.4rem;
		line-height: 1.2;
		text-align:left
	}
`

const Description = styled.p`
	line-height: 1.6;
	@media (min-width: 640px) {
		text-align:left;
	}
`

const Splash = () => (	
	<SplashWrapper>
		<Container>
		<Title>Hey, I'm Louis&hellip;</Title>		
		<SubTitle>&hellip;a User Experience Designer and Frontend Developer based in Leeds</SubTitle>
		<Description>
		 I currently work in the product design team at Virtual College. My role is to collaborate with other designers, developers and stakeholders to conceptualise, prototype and develop user interfaces for the companies websites and applications with a strong emphasis on user experience.
		</Description>
		</Container>
	</SplashWrapper>
)

export default Splash
