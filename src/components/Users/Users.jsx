import React from 'react'
import styles from './Users.module.css'
import userImg from '../../images/user.png'
import uuid from 'react-uuid'

export default function Users(props) {
	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				fullName: 'Dmitry K.',
				status: 'I am looking for a Job right now...',
				location: { city: 'Minsk', countru: 'Belarus' },
				followed: true,
			},
			{
				id: 2,
				fullName: 'Svetlana D.',
				status: 'I am so pretty',
				location: { city: 'Minsk', countru: 'Belarus' },
				followed: true,
			},
			{
				id: 3,
				fullName: 'Sergei S.',
				status: 'I like football!!!',
				location: { city: 'Minsk', countru: 'Belarus' },
				followed: false,
			},
			{
				id: 4,
				fullName: 'Andrew T.',
				status: 'I am free to help you  to create good Video Production',
				location: { city: 'United States', countru: 'Philadelphia' },
				followed: false,
			},
		])
	}

	return (
		<div className={styles.users}>
			<h1 className={styles.users__title}>Users</h1>
			<div className={styles.users__inner}>
				{props.users.map(user => (
					<div key={uuid()} className={styles.user}>
						<div className={styles.user__left}>
							<div className={styles.user__img_block}>
								<img
									className={styles.user__img}
									src={userImg}
									alt={user.fullName}
								/>
							</div>
							{user.followed ? (
								<button
									className={styles.user__follow}
									onClick={() => {
										props.unfollow(user.id)
									}}
								>
									Follow
								</button>
							) : (
								<button
									className={styles.user__follow}
									onClick={() => {
										props.follow(user.id)
									}}
								>
									Unfollow
								</button>
							)}
						</div>
						<div className={styles.user__right}>
							<div className={styles.user__info}>
								<h4 className={styles.user__name}>
									{user.fullName}
								</h4>
								<p className={styles.user__status}>
									{user.status}
								</p>
							</div>
							<div className={styles.user__location}>
								<p className={styles.user__countru}>
									{user.location.countru}
								</p>
								<p className={styles.user__city}>
									{user.location.city}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
