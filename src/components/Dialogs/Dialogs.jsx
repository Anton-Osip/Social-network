import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

export default function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>
					<NavLink
						to='/dialogs/Anton'
						className={({ isActive }) =>
							isActive
								? styles.active__name
								: styles.dialogs____name
						}
					>
						Anton
					</NavLink>
					<NavLink
						to='/dialogs/Viktor'
						className={({ isActive }) =>
							isActive
								? styles.active__name
								: styles.dialogs____name
						}
					>
						Viktor
					</NavLink>
					<NavLink
						to='/dialogs/Valera'
						className={({ isActive }) =>
							isActive
								? styles.active__name
								: styles.dialogs____name
						}
					>
						Valera
					</NavLink>
					<NavLink
						to='/dialogs/Sveta'
						className={({ isActive }) =>
							isActive
								? styles.active__name
								: styles.dialogs____name
						}
					>
						Sveta
					</NavLink>
					<NavLink
						to='/dialogs/Pasha'
						className={({ isActive }) =>
							isActive
								? styles.active__name
								: styles.dialogs____name
						}
					>
						Pasha
					</NavLink>
				</div>
				<div className={styles.dialogs__messages}>
					<div
						className={`${styles.dialogs__message}  ${styles.dialogs__myMessage}`}
					>
						<p className={styles.dialogs__text}>
							I am a normal popover and I can have text and
							everything
						</p>
					</div>
					<div className={styles.dialogs__message}>
						<p className={styles.dialogs__text}>
							I am a normal pBLablabl I can have text and
							everything
						</p>
					</div>
					<div
						className={`${styles.dialogs__message}  ${styles.dialogs__myMessage}`}
					>
						<p className={styles.dialogs__text}>
							I am a normal popover and I can have text and
							everything
						</p>
					</div>
					<div className={styles.dialogs__message}>
						<p className={styles.dialogs__text}>
							I am a normal pBLablabl I can have text and
							everything
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
