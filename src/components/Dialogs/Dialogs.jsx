import React from 'react'
import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import uuid from 'react-uuid'

export default function Dialogs(props) {
	const dialogsElements = props.dialogsData.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.messagesData.map(message => (
		<Message message={message.message} key={uuid()} my={message.my} />
	))

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>{dialogsElements}</div>
				<div className={styles.dialogs__messages}>
					{messagesElements}
				</div>
			</div>
		</div>
	)
}
