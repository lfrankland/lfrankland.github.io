import React from 'react'
import {Link} from 'gatsby'
import Nav from './nav'
import Logo from './logo'
import styles from './header.module.css'


const Header = () => (
	<header className={styles.header}>
		<Link to="/" className={styles.heading}>
			<Logo />
			<h2>Louis Frankland</h2>
		</Link>
		<Nav className={styles.nav}></Nav>
	</header>
)

export default Header