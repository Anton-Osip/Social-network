import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import DialogsContainer from './components/Dialogs/DialogsContainer'
import Header from './components/Header/Header.jsx'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'

const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<NavbarContainer />
				<div className='content'>
					<Routes>
						<Route path='/*' element={<Profile />} />
						<Route
							path='/dialogs/*'
							element={<DialogsContainer />}
						/>
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/users' element={<UsersContainer />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
