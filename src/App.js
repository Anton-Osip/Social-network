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
				<Navbar state={props.state.sidebarPage} />
				<div className='content'>
					<Routes>
						<Route
							path='/*'
							element={
								<Profile
									profilePage={props.state.profilePage}
									dispatch={props.dispatch}
								/>
							}
						/>
						<Route
							path='/dialogs/*'
							element={
								<Dialogs
									dialogsPage={props.state.dialogsPage}
									dispatch={props.dispatch}
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
