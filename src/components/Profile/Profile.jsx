import React from 'react'
import styles from './Profile.module.css'

import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

export default function Profile(props) {
	return (
		<div className={styles.content}>
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<MyPostsContainer />
		</div>
	)
}
