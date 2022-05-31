const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
let initialState = {
	dialogs: [
		{ id: 1, name: 'Anton' },
		{ id: 2, name: 'Viktor' },
		{ id: 3, name: 'Valera' },
		{ id: 4, name: 'Sveta' },
		{ id: 5, name: 'Pasha' },
	],
	messages: [
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
	],
	newMessageBody: 'your message...',
}
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = {
				id: state.messages.length,
				message: state.newMessageBody,
				my: true,
			}
			state.messages.push(body)
			state.newMessageBody = ''
			return state

		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			return state

		default:
			return state
	}
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = body => ({
	type: UPDATE_NEW_MESSAGE_BODY,
	body: body,
})

export default dialogsReducer
