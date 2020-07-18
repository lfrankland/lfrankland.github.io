import React from 'react'
import styles from './layout.module.css'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return <div className={styles.container}>
		<Header></Header>
		<main className={styles.main}>
		{children}
		</main>
		<Footer></Footer>
	</div>
}
