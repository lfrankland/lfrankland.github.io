import React from 'react'
import styles from './HomeHero.module.css';

const HomeHero = () => (
	<div className={styles.homeHero}>
		<h1 className={styles.title}>Hey, I'm Louis</h1>		
		<h2 className={styles.subtitle}>a UX designer and developer based in Leeds</h2>
		<p className={styles.description}>
		 I currently work in the product design team at Virtual College. My role is to collaborate with other designers, developers and stakeholders to conceptualise, prototype and develop user interfaces for the companies websites and applications with a strong emphasis on user experience.
			</p>
	</div>
)

export default HomeHero
