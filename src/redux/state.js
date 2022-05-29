import { rerenderEntireTree } from '../render'

const state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Hey, why nobody love me?', likeCount: '10' },
			{ id: 2, message: "It's our new program! Hey!", likeCount: '25' },
		],
		newPost: 'your news...',
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
}

export let addPost = postMessage => {
	let newPost = {
		id: state.profilePage.posts.length,
		message: postMessage,
		likeCount: 0,
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.newPost = ''
	rerenderEntireTree(state)
}
export let changeNewPost = text => {
	state.profilePage.newPost = text
	rerenderEntireTree(state)
}

export default state
