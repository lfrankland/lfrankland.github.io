import React from 'react'
import styles from './Tools.module.css'

const Tools = () => (
	<div className={styles.tools}>
		<h2 className={styles.title}>Tools &amp; Technologies</h2>
		<ul className={styles.list}>
			<li className={styles.tool}><img src={'/logos/html5.svg'} alt="HTML5" /></li>
			<li className={styles.tool}><img src={'/logos/css3.svg'} alt="CSS3" /></li>
			<li className={styles.tool}><img src={'/logos/sass.svg'} alt="Sass" /></li>
			<li className={styles.tool}><img src={'/logos/gatsby.svg'} alt="GatsbyJS" /></li>
			<li className={styles.tool}><img src={'/logos/axure.svg'} alt="Axure RP" /></li>
			<li className={styles.tool}><img src={'/logos/illustrator.svg'} alt="Illustrator" /></li>
			<li className={styles.tool}><img src={'/logos/photoshop.svg'} alt="Photoshop" /></li>
		</ul>
	</div>
)

export default Tools
