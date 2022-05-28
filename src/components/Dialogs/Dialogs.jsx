import React from 'react'
import uuid from 'react-uuid'
import styles from './Dialogs.module.css'

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'


export default function Dialogs(props) {
	const dialogsElements = props.state.dialogs.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.state.messages.map(message => (
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
