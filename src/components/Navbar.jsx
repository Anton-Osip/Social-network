import React from 'react'

export default function Navbar() {
	return (
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
	)
}
