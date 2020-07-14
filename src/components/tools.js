import React from 'react'
import styles from './Tools.module.css'

const Tools = () => (
	<div className={styles.tools}>
		<h2 className={styles.title}>Tools &amp; Technologies</h2>
		<ul className={styles.list}>
			<li className={styles.tool}><img src={'/logos/html5.svg'} alt="HTML5 Logo" /></li>
			<li className={styles.tool}><img src={'/logos/css3.svg'} alt="CSS3 Logo" /></li>
			<li className={styles.tool}><img src={'/logos/sass.svg'} alt="Sass Logo" /></li>
			<li className={styles.tool}><img src={'/logos/axure.svg'} alt="Axure RP Logo" /></li>
			<li className={styles.tool}><img src={'/logos/illustrator.svg'} alt="Illustrator Logo" /></li>
			<li className={styles.tool}><img src={'/logos/photoshop.svg'} alt="Photoshop Logo" /></li>
		</ul>
	</div>
)

export default Tools