import React from 'react'
import {
	addMessageActionCreator,
	updateNewMessageTextActionCreator,
} from '../../../redux/state'
import styles from './NewMessage.module.css'

export default function NewMessage(props) {
	let newMessageElement = React.createRef()

	function addMessage(e) {
		e.preventDefault()
		let action = addMessageActionCreator()
		props.dispatch(action)
	}

	function onMessageChange() {
		let text = newMessageElement.current.value
		let action = updateNewMessageTextActionCreator(text)
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
