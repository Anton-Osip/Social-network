import React from 'react'
import styles from './NewMessage.module.css'

export default function NewMessage() {
	let newMessageElement = React.createRef()
	let addMessage = () => {
		let text = newMessageElement.current.value
		alert(text)
	}
	return (
		<form className={styles.form}>
			<input
				ref={newMessageElement}
				type='text'
				className={styles.form__input}
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
