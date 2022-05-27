import React from 'react'
import logo from '../../images/logo.png'
import stules from './Header.module.css'

export default function Header() {
	return (
		<header className={stules.header}>
			<img src={logo} alt='logo' className={stules.header__img} />
		</header>
	)
}
