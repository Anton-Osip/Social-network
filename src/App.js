import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'

const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar state={props.state.sidebar} />
				<div className='content'>
					<Routes>
						<Route
							path='/*'
							element={
								<Profile
									profilePage={props.state.profilePage}
									addPost={props.addPost}
									updateNewPostText={props.updateNewPostText}
								/>
							}
						/>
						<Route
							path='/dialogs/*'
							element={
								<Dialogs
									messagesPage={props.state.messagesPage}
									addMessage={props.addMessage}
									updateNewMessageText={props.updateNewMessageText}
								/>
							}
						/>
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
