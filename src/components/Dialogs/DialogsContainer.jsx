import React from 'react'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs.jsx'

export default function DialogsContainer(props) {
	function onSendMessageClick(e) {
		let action = sendMessageCreator()
		props.store.dispatch(action)
	}

	function onNewMessageChange(body) {
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}
	return (
		<Dialogs
			updateNewMessageBody={onNewMessageChange}
			SendMessageClick={onSendMessageClick}
			dialogsPage={props.store.getState().dialogsPage}
		/>
	)
}
