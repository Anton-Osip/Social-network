import React from 'react'
import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

export default function Dialogs() {
	const dialogsData = [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Viktor' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Sveta' },
		{ id: 5, name: 'Pasha' },
	]
	const messagesData = [
		{
			id: 1,
			message: 'I am a normal pBLablabl I can have text and						everything',
		},
		{
			id: 2,
			message: 'I am a normal pBLablabl I can have text and						everything',
		},
		{
			id: 3,
			message: 'I am a normal pBLablabl I can have text and						everything',
		},
		{
			id: 4,
			message: 'I am a normal pBLablabl I can have text and						everything',
		},
	]

	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>
					<Dialog name='Anton' />
				</div>
				<div className={styles.dialogs__messages}>
					<Message
						message='I am a normal pBLablabl I can have text and
							everything'
					/>
				</div>
			</div>
		</div>
	)
}
