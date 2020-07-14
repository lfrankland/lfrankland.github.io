import React from 'react'
import styles from './Skills.module.css'

const Skills = () => (
	<div className={styles.skills}>
		<h2 className={styles.title}>Skills</h2>
		<ul className={styles.list}>
			<li className={styles.skill}>
				<h3>Ideation</h3>
				<p>A good idea is the first step in any new project. I have years of experience of rapid  ideation to  nurture ideas into delivered products and services.</p>
			</li>
			<li className={styles.skill}>
				<h3>Prototyping</h3>
				<p>Depending on the stage of development and your audience, lo-fi sketches on whiteboards to high quality part-functional prototypes I have produced have saved time and money in product development.</p>
			</li>
			<li className={styles.skill}>
				<h3>Collaborative design</h3>
				<p>Working with others, be that other designers, developers, stakeholders - or most importantly - end users, I get results which were never thought possible.</p>
			</li>
			<li className={styles.skill}>
				<h3>Front-end development</h3>
				<p>Over ten years experience in front-end web development. Keeping up-to-date with the latest technologies, such as CSS Grid to create working, accessible and maintainable front-end code.</p>
			</li>
			<li className={styles.skill}>
				<h3>User research</h3>
				<p>Using techniques such as surveys, usability testing and customer interviews to understand those who use the product as best as possible, to make the products as best as possible for them</p>
			</li>	
			<li className={styles.skill}>
				<h3>Usability testing</h3>
				<p>Carrying out usability testing and working with others to devise and test scenarios to gain real insights into how people interact with a service or application. </p>
			</li>
		</ul>
	</div>
)

export default Skills
