import React, { Component } from 'react'
import styles from './Users.module.css'
import userImg from '../../images/user.png'
import uuid from 'react-uuid'
import * as axios from 'axios'

export default class Users extends Component {
	constructor(props) {
		super(props)
		axios
			.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => this.props.setUsers(response.data.items))
	}
	render() {
		return (
			<div className={styles.users}>
				<h1 className={styles.users__title}>Users</h1>
				<div className={styles.users__inner}>
					{this.props.users.map(user => (
						<div key={uuid()} className={styles.user}>
							<div className={styles.user__left}>
								<div className={styles.user__img_block}>
									<img
										className={styles.user__img}
										src={
											user.photos.small != null
												? user.photos.small
												: userImg
										}
										alt={user.name}
									/>
								</div>
								{user.followed ? (
									<button
										className={styles.user__follow}
										onClick={() => {
											this.props.unfollow(user.id)
										}}
									>
										Follow
									</button>
								) : (
									<button
										className={styles.user__follow}
										onClick={() => {
											this.props.follow(user.id)
										}}
									>
										Unfollow
									</button>
								)}
							</div>
							<div className={styles.user__right}>
								<div className={styles.user__info}>
									<h4 className={styles.user__name}>
										{user.name}
									</h4>
									<p className={styles.user__status}>
										{user.status}
									</p>
								</div>
								<div className={styles.user__location}>
									<p className={styles.user__countru}>
										Беларусь
									</p>
									<p className={styles.user__city}>Минск</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

// import React from 'react'
// import styles from './Users.module.css'
// import userImg from '../../images/user.png'
// import uuid from 'react-uuid'
// import * as axios from 'axios'

// export default function Users(props) {
// 	let getUsers = () => {
// 		if (props.users.length === 0) {
// 			axios
// 				.get('https://social-network.samuraijs.com/api/1.0/users')
// 				.then(response => props.setUsers(response.data.items))
// 		}
// 	}

// 	return (
// 		<div className={styles.users}>
// 			<h1 className={styles.users__title}>Users</h1>
// 			<div className={styles.users__inner}>
// 				<button onClick={getUsers}>Get users</button>
// 				{props.users.map(user => (
// 					<div key={uuid()} className={styles.user}>
// 						<div className={styles.user__left}>
// 							<div className={styles.user__img_block}>
// 								<img
// 									className={styles.user__img}
// 									src={
// 										user.photos.small != null
// 											? user.photos.small
// 											: userImg
// 									}
// 									alt={user.name}
// 								/>
// 							</div>
// 							{user.followed ? (
// 								<button
// 									className={styles.user__follow}
// 									onClick={() => {
// 										props.unfollow(user.id)
// 									}}
// 								>
// 									Follow
// 								</button>
// 							) : (
// 								<button
// 									className={styles.user__follow}
// 									onClick={() => {
// 										props.follow(user.id)
// 									}}
// 								>
// 									Unfollow
// 								</button>
// 							)}
// 						</div>
// 						<div className={styles.user__right}>
// 							<div className={styles.user__info}>
// 								<h4 className={styles.user__name}>
// 									{user.name}
// 								</h4>
// 								<p className={styles.user__status}>
// 									{user.status}
// 								</p>
// 							</div>
// 							<div className={styles.user__location}>
// 								<p className={styles.user__countru}>Беларусь</p>
// 								<p className={styles.user__city}>Минск</p>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	)
// }
