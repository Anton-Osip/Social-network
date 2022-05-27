import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<a href='/profile'>Профиль</a>
			</div>
			<div className={styles.item}>
				<a href='/messages'>Сообщения</a>
			</div>
			<div className={styles.item}>
				<a href='/news'>Новости</a>
			</div>
			<div className={styles.item}>
				<a href='/music'>Музыка</a>
			</div>
			<div className={styles.item}>
				<a href='/settings'>Настройки</a>
			</div>
		</nav>
	)
}
