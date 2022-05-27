import React from 'react'
import styles from './Message.module.css'

export default function Message(props) {
	return (
		<div
			className={`${styles.dialogs__message}  ${styles.dialogs__myMessage}`}
		>
			<p className={styles.dialogs__text}>{props.message}</p>
		</div>
	)
}
