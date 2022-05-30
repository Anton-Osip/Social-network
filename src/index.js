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
			<App state={state} dispatch={store.dispatch.bind(store)} />
		</React.StrictMode>
	)
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals()
