import React from 'react'
import styles from './Projects.module.css';
import Card from '../Card/Card'

const Projects = () => (
	<div className={styles.Projects}>
		<h2 className={styles.title}>Projects</h2>
		<div className={styles.cardContainer}>
			<Card />
			<Card />
			<Card />
		</div>
	</div>
)

export default Projects
