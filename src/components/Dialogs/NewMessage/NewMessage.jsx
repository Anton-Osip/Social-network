import React from 'react'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../../redux/dialogs-reducer.js'
import styles from './NewMessage.module.css'

export default function NewMessage(props) {
	function onSendMessageClick(e) {
		e.preventDefault()
		let action = sendMessageCreator()
		props.dispatch(action)
	}

	function onNewMessageChange(e) {
		let body = e.target.value
		let action = updateNewMessageBodyCreator(body)
		props.dispatch(action)
	}
	return (
		<form className={styles.form}>
			<input
				onChange={onNewMessageChange}
				type='text'
				className={styles.form__input}
				value={props.newMessageBody}
			/>
			<button
				onClick={onSendMessageClick}
				type='submit'
				className={styles.form__btn}
			>
				SEND
			</button>
		</form>
	)
}
