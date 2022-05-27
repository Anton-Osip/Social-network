import React from 'react'
import styles from './Dialogs.module.css'

export default function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<h1 className={styles.dialogs__title}>DIALOGS</h1>
			<div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}>
					<p className={styles.dialogs____name}>Anton</p>
					<p
						className={`${styles.dialogs____name}  ${styles.active__name}`}
					>
						Viktor
					</p>
					<p className={styles.dialogs____name}>Valera</p>
					<p className={styles.dialogs____name}>Sveta</p>
					<p className={styles.dialogs____name}>Pasha</p>
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
