import React from 'react'
import styles from './contact.module.css'

const Contact = () => (
	<main className={styles.contact}> 
		<h1>Get in touch</h1>
		<form action="https://getform.io/f/120128c8-0857-4706-9509-059d5ff49793" method="POST">
			<div className={styles.field}>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" required/>
			</div>
			<div for="email" className={styles.field}>
				<label htmlFor="email">Email address</label>
				<input type="email" name="email" id="email" required/>
			</div>
			<div className={styles.field}>
				<label htmlFor="message">Message</label>
				<textarea name="message" id="message" required></textarea>
			</div>
			<button className="button" type="submit">Send</button>
		</form>
	</main>
)

export default Contact
