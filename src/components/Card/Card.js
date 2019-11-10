import React from 'react'
import styles from './Card.module.css';

const Card = () => (
	<div className={styles.Card}>
		<img src="https://placeimg.com/320/180/tech/grayscale" alt="Placeholder image" /> 
		<h3 className={styles.title}>Card Title</h3>
	</div>
)

export default Card