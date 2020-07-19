import React from 'react'
import Container from './container'
import styled from 'styled-components'

const SkillsWrapper = styled.div`
	padding: 32px 64px;
`

const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 24px;
	margin: 0;
	padding: 0;
	width: 100%;
	grid-gap: 32px;

	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 32px;
	}
`

const Skill = styled.li`
	background-color: var(--color-light);
	border-radius: 2px;
	box-shadow: 0 3px 3px rgba(0,0,0,0.2);
	color: var(--color-dark);
	margin-left: 0;
	min-width: 0;
	padding: 24px;
	list-style: none;	
`

const Skills = () => (
	<SkillsWrapper>
		<Container>
			<h2>Skills</h2>
			<SkillsList>
				<Skill>
					<h3>Front-end development</h3>
					<p>Over ten years experience in front-end web development. Keeping up-to-date with the latest technologies, such as CSS Grid to create working, accessible and maintainable front-end code.</p>
				</Skill>
				<Skill>
					<h3>Collaborative design</h3>
					<p>Working with others, be that other designers, developers, stakeholders - or most importantly - end users, I get results which were never thought possible.</p>
				</Skill>
				<Skill>					
					<h3>Ideation</h3>
					<p>A good idea is the first step in any new project. I have years of experience of rapid  ideation to  nurture ideas into delivered products and services.</p>
				</Skill>
				<Skill>
					<h3>Prototyping</h3>
					<p>Depending on the stage of development and your audience, lo-fi sketches on whiteboards to high quality part-functional prototypes I have produced have saved time and money in product development.</p>
				</Skill>
				<Skill>
					<h3>User research</h3>
					<p>Using techniques such as surveys, usability testing and customer interviews to understand those who use the product as best as possible, to make the products as best as possible for them</p>
				</Skill>	
				<Skill>
					<h3>Usability testing</h3>
					<p>Carrying out usability testing and working with others to devise and test scenarios to gain real insights into how people interact with a service or application. </p>
				</Skill>
			</SkillsList>
		</Container>
	</SkillsWrapper>
)

export default Skills
