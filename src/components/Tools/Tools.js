import React from 'react'
import styles from './Tools.module.css';
import html5 from './html5.svg';
import css3 from './css3.svg';
import sass from './sass.svg';
import axure from './axure.svg';
import illustrator from './illustrator.svg';
import photoshop from './photoshop.svg';

const Tools = () => (
	<div className={styles.tools}>
		<h2 className={styles.title}>Tools</h2>
		<ul className={styles.list}>
			<li className={styles.tool}><img src={html5} alt="HTML5 Logo" /></li>			
			<li className={styles.tool}><img src={css3} alt="CSS3 Logo" /></li>
			<li className={styles.tool}><img src={sass} alt="Sass Logo" /></li>	
			<li className={styles.tool}><img src={axure} alt="Axure RP Logo" /></li>			
			<li className={styles.tool}><img src={illustrator} alt="Illustrator Logo" /></li>
			<li className={styles.tool}><img src={photoshop} alt="Photoshop Logo" /></li>	
		</ul>
	</div>
)

export default Tools
