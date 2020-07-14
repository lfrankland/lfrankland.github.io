import React from 'react'
import styles from './tags.module.css'

function Tags(props) {
  const tags = props.tags;
  const listItems = tags.map((tag) =>    <li className={styles.tag}>{tag}</li>  );  return (
		<ul className={styles.tagList}>{listItems}</ul>
	);
}

export default Tags

