import React from 'react'
import styles from './Profile.module.css'

import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

export default function Profile(props) {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts
				profilePage={props.profilePage}
				addPost={props.addPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}
