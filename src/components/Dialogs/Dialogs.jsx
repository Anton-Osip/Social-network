import React from 'react'
import styles from './Dialogs.module.css'

export default function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}></div>
		</div>
	)
}
