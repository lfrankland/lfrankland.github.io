import React from 'react'
import styles from './blogheader.module.css'

const blogHeader = props => <header className={styles.blogHeader}>
	<div className={styles.blogHeaderContent}>
		<h1>{props.title}</h1>
		<p>{props.description}</p>
	</div>
</header>;

export default blogHeader