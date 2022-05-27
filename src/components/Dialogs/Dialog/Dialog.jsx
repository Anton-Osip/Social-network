import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialog.module.css'

export default function Dialog(props) {
	return (
		<div>
			<NavLink
				to={`/dialogs/${props.name}`}
				className={({ isActive }) =>
					isActive ? styles.active__name : styles.dialogs____name
				}
			>
				{props.name}
			</NavLink>
		</div>
	)
}
