import React from 'react'
import logo from '../../images/logo.png'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
	return (
		<header className={styles.header}>
			<img src={logo} alt='logo' className={styles.header__img} />

			<div className={styles.loginBlock}>
				{props.isAuth ? (
					<p>{props.login}</p>
				) : (
					<NavLink to={'/login'}>Login</NavLink>
				)}
			</div>
		</header>
	)
}
