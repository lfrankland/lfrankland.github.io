import React from 'react'
import styles from './Skills.module.css';
import html5 from './html5.svg';
import css3 from './css3.svg';
import sass from './sass.svg';
import axure from './axure.svg';
import illustrator from './illustrator.svg';
import photoshop from './photoshop.svg';

const Skills = () => (
	<div className={styles.skills}>
		<h2 className={styles.title}>Skills</h2>
		<ul className={styles.list}>
			<li className={styles.skill}><img src={html5} alt="HTML5 Logo" /></li>			
			<li className={styles.skill}><img src={css3} alt="CSS3 Logo" /></li>
			<li className={styles.skill}><img src={sass} alt="Sass Logo" /></li>	
			<li className={styles.skill}><img src={axure} alt="Axure RP Logo" /></li>			
			<li className={styles.skill}><img src={illustrator} alt="Illustrator Logo" /></li>
			<li className={styles.skill}><img src={photoshop} alt="Photoshop Logo" /></li>	
		</ul>
	</div>
)

export default Skills
