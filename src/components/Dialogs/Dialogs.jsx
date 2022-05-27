import React from 'react'
import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import uuid from 'react-uuid'

export default function Dialogs() {
	const dialogsData = [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Viktor' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Sveta' },
		{ id: 5, name: 'Pasha' },
	]
	const dialogsElements = dialogsData.map(dialog => (
		<Dialog name={dialog.name} key={uuid()} />
	))

	const messagesData = [
		{
			id: 1,
			message: 'I am a normal pBLablabl I can have text and						everything',
			my: false,
		},
		{
			id: 2,
			message: 'I am a normal pBLablabl I can have text and						everything',
			my: true,
		},
		{
			id: 3,
			message: 'I am a normal pBLablabl I can have text and						everything',
			my: false,
		},
		{
			id: 4,
			message: 'I am a normal pBLablabl I can have text and						everything',
			my: true,
		},
	]
	const messagesElements = messagesData.map(message => (
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
