import React from 'react'
import {
	sendMessageCreator,
	updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import Dialogs from './Dialogs.jsx'

export default function DialogsContainer(props) {
	return (
		<StoreContext.Consumer>
			{store => {
				function onSendMessageClick(e) {
					let action = sendMessageCreator()
					store.dispatch(action)
				}

				function onNewMessageChange(body) {
					store.dispatch(updateNewMessageBodyCreator(body))
				}
				return (
					<Dialogs
						updateNewMessageBody={onNewMessageChange}
						SendMessageClick={onSendMessageClick}
						dialogsPage={store.getState().dialogsPage}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}
