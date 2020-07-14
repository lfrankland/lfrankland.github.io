import React from 'react'
import styles from './contact.module.css'

const Contact = () => (
	<main className={styles.contact}> 
		<h1>Get in touch</h1>
		<p>You can reach out to me via:
			<ul>
				<li>Emailing me at <a href="mailto:louis@frank.land">louis@frank.land</a></li>
				<li>Connecting me on <a href="https://www.linkedin.com/in/louisfrankland/">LinkedIn</a></li>
				<li>Following me on <a href="https://twitter.com/louisfrankland">Twitter</a></li>
			</ul>
		</p>
	</main>
)

export default Contact
