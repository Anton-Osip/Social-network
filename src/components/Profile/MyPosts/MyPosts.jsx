import React from 'react'
import uuid from 'react-uuid'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import styles from './MyPosts.module.css'

import Post from './Post/Post'

export default function MyPosts(props) {
	const postsElements = props.profilePage.posts.map(post => (
		<Post message={post.message} likeCount={post.likeCount} key={uuid()} />
	))

	let newPostElement = React.createRef()

	function addPost(e) {
		e.preventDefault()
		let action = addPostActionCreator()
		props.dispatch(action)
	}

	function onPostChange() {
		let text = newPostElement.current.value
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action)
	}

	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input
						onChange={onPostChange}
						type='text'
						ref={newPostElement}
						value={props.profilePage.newPostText}
						className={styles.newPost__input}
					/>
					<button
						onClick={addPost}
						type='submit'
						className={styles.newPost__btn}
					>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	)
}
