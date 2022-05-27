import React from 'react'
import Dialog from './Dialog/Dialog'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

export default function Dialogs() {
	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>
					<Dialog name='Anton' />
					<Dialog name='Viktor' />
					<Dialog name='Valera' />
					<Dialog name='Sveta' />
					<Dialog name='Pasha' />
				</div>
				<div className={styles.dialogs__messages}>
					<Message
						message='I am a normal pBLablabl I can have text and
							everything'
					/>
					<Message
						message='I am a normal pBLablabl I can have text and
							everything'
					/>
					<Message
						message='I am a normal pBLablabl I can have text and
							everything'
					/>
					<Message
						message='I am a normal pBLablabl I can have text and
							everything'
					/>
				</div>
			</div>
		</div>
	)
}
