import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink
					to='/profile'
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Профиль
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					to='/dialogs'
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Сообщения
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					to='/news'
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Новости
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					to='/music'
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Музыка
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink
					to='/settings'
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					Настройки
				</NavLink>
			</div>
		</nav>
	)
}
