import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { addPost, changeNewPost } from './redux/state'
const root = ReactDOM.createRoot(document.getElementById('root'))
export let rerenderEntireTree = state => {
	root.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} changeNewPost ={changeNewPost}/>
		</React.StrictMode>
	)
}
