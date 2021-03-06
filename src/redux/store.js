import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'



let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hey, why nobody love me?', likeCount: '10' },
				{
					id: 2,
					message: "It's our new program! Hey!",
					likeCount: '25',
				},
			],
			newPostText: 'your news...',
		},
		dialogsPage: {
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
					message:
						'I am a normal pBLablabl I can have text and						everything',
					my: false,
				},
				{
					id: 2,
					message:
						'I am a normal pBLablabl I can have text and						everything',
					my: true,
				},
				{
					id: 3,
					message:
						'I am a normal pBLablabl I can have text and						everything',
					my: false,
				},
				{
					id: 4,
					message:
						'I am a normal pBLablabl I can have text and						everything',
					my: true,
				},
			],
			newMessageBody: 'your message...',
		},
		sidebar: {
			links: [
				{ id: 1, link: 'Профиль', href: '/profile' },
				{ id: 2, link: 'Сообщения', href: '/dialogs' },
				{ id: 3, link: 'Новости', href: '/news' },
				{ id: 4, link: 'Музыка', href: '/music' },
				{ id: 5, link: 'Настройки', href: '/settings' },
				{ id: 5, link: 'Друзья', href: '/frends' },
			],
			frends: [
				{ id: 1, name: 'Anton' },
				{ id: 2, name: 'Viktor' },
				{ id: 3, name: 'Valera' },
			],
		},
	},
	getState() {
		return this._state
	},
	_callSubscriber() {},
	subscribe(observer) {
		this._callSubscriber = observer //observer почитать
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(
			this._state.profilePage,
			action
		)

		this._state.dialogsPage = dialogsReducer(
			this._state.dialogsPage,
			action
		)

		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	},
}





export default store
