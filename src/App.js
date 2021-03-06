import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import DialogsContainer from './components/Dialogs/DialogsContainer'
import NavbarContainer from './components/Navbar/NavbarContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'

const App = props => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<HeaderContainer />
				<NavbarContainer />
				<div className='content'>
					<Routes>
						<Route path='/profile/:userId' element={<ProfileContainer />} />
						<Route path='/profile/' element={<ProfileContainer />} />
						<Route path='/' element={<ProfileContainer />} />
						<Route path='/dialogs/*' element={<DialogsContainer />} />
						<Route path='/news' element={<News />} />
						<Route path='/music' element={<Music />} />
						<Route path='/users' element={<UsersContainer />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
