import React from 'react'
import styles from './Skills.module.css';

const Skills = () => (
	<div className={styles.skills}>
		<h2 className={styles.title}>Skills</h2>
		<ul className={styles.list}>
			<li className={styles.skill}>Ideation</li>
			<li className={styles.skill}>Prototyping</li>
			<li className={styles.skill}>Collaborative design</li>
			<li className={styles.skill}>Front-end development</li>
			<li className={styles.skill}>User research</li>
			<li className={styles.skill}>Usability testing</li>
		</ul>
	</div>
)

export default Skills
