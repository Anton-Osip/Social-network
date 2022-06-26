import React from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
	return (
		<div className={styles.ldsCircleContainer}>
			<div className={styles.ldsCircleBlock}>
				<div className={styles.ldsCircle}></div>
			</div>
		</div>
	)
}
