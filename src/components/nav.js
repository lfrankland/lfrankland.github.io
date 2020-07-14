import React from 'react'
import {Link} from 'gatsby'
import styles from './nav.module.css'

const Nav = () => (
	<nav className={styles.nav}>
		<Link to="/" className={styles.link}>Home</Link>
		<Link to="contact" className={styles.link}>Contact</Link>
	</nav>
)

export default Nav
