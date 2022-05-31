import reportWebVitals from './reportWebVitals'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import store from './redux/redux-store'
import { Provider } from './StoreContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = state => {
	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	)
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
	rerenderEntireTree(store.getState())
})

reportWebVitals()
