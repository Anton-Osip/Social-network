import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Link.module.css'

export default function Link(props) {
	return (
		<div className={styles.item}>
			<NavLink
				to={props.href}
				className={({ isActive }) =>
					isActive ? styles.activeLink : styles.link
				}
			>
				{props.link}
			</NavLink>
		</div>
	)
}
