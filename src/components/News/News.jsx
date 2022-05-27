import React from 'react'
import styles from './News.module.css'

export default function News(props) {
	return (
		<div className={styles.news}>
			<h1 className={styles.news__title}>NEWS</h1>
			<div className={styles.news__inner}></div>
		</div>
	)
}
