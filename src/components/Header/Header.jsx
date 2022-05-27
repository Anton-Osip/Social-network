import React from 'react'
import logo from '../../images/logo.png'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt='logo' className={styles.header__img} />
		</header>
	)
}
