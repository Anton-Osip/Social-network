import reportWebVitals from './reportWebVitals'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = state => {
	root.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				addPost={store.addPost.bind(store)}
				updateNewPostText={store.updateNewPostText.bind(store)}
				addMessage={store.addMessage.bind(store)}
				updateNewMessageText={store.updateNewMessageText.bind(store)}
			/>
		</React.StrictMode>
	)
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals()
