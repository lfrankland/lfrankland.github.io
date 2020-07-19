import React from 'react'
import styled from 'styled-components'

const ToolsWrapper = styled.div`
padding: 32px 64px;
`
const Title = styled.h2`
	color: var(--color-light);
	margin-bottom: 24px;
	text-align: center;
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
	background-color: white;
	border-radius: 50%;
	display: flex;
	height: 96px;
	justify-content: center;
	margin: 8px 32px;
	padding: 16px;
	width: 96px;

	img {
		max-width: 100%;
	}
`


const Tools = () => (
	<ToolsWrapper>
		<Title>Tools &amp; Technologies</Title>
		<ToolList>
			<Tool><img src={'/logos/html5.svg'} alt="HTML5" /></Tool>
			<Tool><img src={'/logos/css3.svg'} alt="CSS3" /></Tool>
			<Tool><img src={'/logos/sass.svg'} alt="Sass" /></Tool>
			<Tool><img src={'/logos/gatsby.svg'} alt="GatsbyJS" /></Tool>
			<Tool><img src={'/logos/axure.svg'} alt="Axure RP" /></Tool>
			<Tool><img src={'/logos/illustrator.svg'} alt="Illustrator" /></Tool>
			<Tool><img src={'/logos/photoshop.svg'} alt="Photoshop" /></Tool>
		</ToolList>
	</ToolsWrapper>
)

export default Tools
