import React from 'react'
import './App.css'
import logo from './images/logo.png'
import banner from './images/banner.jpg'

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img src={logo} alt='logo' />
			</header>
			<nav className='nav'>
				<div>
					<a href='#profile'>Профиль</a>
				</div>
				<div>
					<a href='#messages'>Сообщения</a>
				</div>
				<div>
					<a href='#news'>Новости</a>
				</div>
				<div>
					<a href='#music'>Музыка</a>
				</div>
				<div>
					<a href='#settings'>Настройки</a>
				</div>
			</nav>
			<div className='content'>
				<div>
					<img src={banner} alt='banner' className='banner-img' />
				</div>
				<div>ava + description</div>
				<div>
					My post
					<div>New Post</div>
				</div>
				<div>
					<div>post 1</div>
					<div>post 2</div>
				</div>
			</div>
		</div>
	)
}

export default App
