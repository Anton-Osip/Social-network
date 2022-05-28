import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const postsData = [
	{ id: 1, message: 'Hey, why nobody love me?', likeCount: '10' },
	{ id: 2, message: "It's our new program! Hey!", likeCount: '25' },
	{ id: 3, message: 'Hey, why nobody love me?', likeCount: '10' },
	{ id: 4, message: "It's our new program! Hey!", likeCount: '25' },
	{ id: 5, message: 'Hey, why nobody love me?', likeCount: '10' },
	{ id: 6, message: "It's our new program! Hey!", likeCount: '25' },
]
const dialogsData = [
	{ id: 1, name: 'Anton' },
	{ id: 2, name: 'Viktor' },
	{ id: 3, name: 'Valera' },
	{ id: 4, name: 'Sveta' },
	{ id: 5, name: 'Pasha' },
]
const messagesData = [
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
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<App
			posts={postsData}
			dialogs={dialogsData}
			messages={messagesData}
		/>
	</React.StrictMode>
)

reportWebVitals()
