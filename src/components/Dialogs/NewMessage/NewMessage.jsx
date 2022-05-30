import React from 'react'
import styles from './NewMessage.module.css'

export default function NewMessage(props) {
	let newMessageElement = React.createRef()

	function addMessage(e) {
		e.preventDefault()
		let action = { type: 'ADD-MESSAGE' }
		props.dispatch(action)
	}

	function onMessageChange() {
		let text = newMessageElement.current.value
		let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text }
		props.dispatch(action)
	}
	return (
		<form className={styles.form}>
			<input
				onChange={onMessageChange}
				ref={newMessageElement}
				type='text'
				className={styles.form__input}
				value={props.newMessageText}
			/>
			<button
				onClick={addMessage}
				type='submit'
				className={styles.form__btn}
			>
				SEND
			</button>
		</form>
	)
}
