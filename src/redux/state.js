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
		messagesPage: {
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
			newMessageText: 'your message...',
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
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: this._state.profilePage.posts.length,
				message: this._state.profilePage.newPostText,
				likeCount: 0,
			}
			this._state.profilePage.posts.unshift(newPost)
			this._state.profilePage.newPostText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText
			this._callSubscriber(this._state)
		} else if (action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: this._state.messagesPage.messages.length,
				message: this._state.messagesPage.newMessageText,
				my: true,
			}
			this._state.messagesPage.messages.push(newMessage)
			this._state.messagesPage.newMessageText = ''
			this._callSubscriber(this._state)
		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.newText
			this._callSubscriber(this._state)
		}
	},
}

export default store
