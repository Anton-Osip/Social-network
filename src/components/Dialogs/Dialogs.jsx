import React from 'react'
import uuid from 'react-uuid'
import styles from './Dialogs.module.css'

import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

export default function Dialogs(props) {
	function onSendMessageClick(e) {
		e.preventDefault()
		props.sendMessage()
	}

	function onNewMessageChange(e) {
		let body = e.target.value
		props.updateNewMessageBody(body)
	}
	const dialogsElements = props.dialogsPage.dialogs.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesElements = props.dialogsPage.messages.map(message => (
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
				<form className={styles.form}>
					<input
						onChange={onNewMessageChange}
						type='text'
						className={styles.form__input}
						value={props.dialogsPage.newMessageBody}
					/>
					<button
						onClick={onSendMessageClick}
						type='submit'
						className={styles.form__btn}
					>
						SEND
					</button>
				</form>
			</div>
		</div>
	)
}
