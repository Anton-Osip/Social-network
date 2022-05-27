import React from 'react'
import styles from './Music.module.css'

export default function Music(props) {
	return (
		<div className={styles.music}>
			<h1 className={styles.music__title}>MUSIC</h1>
			<div className={styles.music__inner}></div>
		</div>
	)
}
