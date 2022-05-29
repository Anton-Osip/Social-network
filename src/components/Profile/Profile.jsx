import React from 'react'
import styles from './Profile.module.css'

import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

export default function Profile(props) {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts
				state={props.state}
				addPost={props.addPost}
				changeNewPost={props.changeNewPost}
			/>
		</div>
	)
}
