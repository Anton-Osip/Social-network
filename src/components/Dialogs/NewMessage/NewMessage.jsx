import React from 'react'
import styles from './NewMessage.module.css'

export default function NewMessage(props) {
	let newMessageElement = React.createRef()

	function addMessage(e) {
		e.preventDefault()
		props.addMessage()
	}

	function onMessageChange() {
		let text = newMessageElement.current.value
		props.updateNewMessageText(text)
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
