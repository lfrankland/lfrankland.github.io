import React from 'react'
import { Link } from 'gatsby'
import styles from './HomeHeader.module.css';

const HomeHeader = ({ siteTitle }) => (
	<header className={styles.homeHeader}>
		<h1>
			<Link to="/" className={styles.title} >Louis Frankland</Link>
		</h1>
		<h2 className={styles.subTitle}>UI designer and developer based in Leeds</h2>
		<p className={styles.description}>
		 I currently work in the product design team at Virtual College. My role is to collaborate with other designers, developers and stakeholders to conceptualise, prototype and develop user interfaces for the companies websites and applications with a strong emphasis on user experience.
			</p>
	</header>
)

export default HomeHeader
