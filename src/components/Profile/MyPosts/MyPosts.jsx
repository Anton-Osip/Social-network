import React from 'react'
import uuid from 'react-uuid'
import styles from './MyPosts.module.css'

import Post from './Post/Post'

export default function MyPosts(props) {
	const postsElements = props.posts.map(post => (
		<Post message={post.message} likeCount={post.likeCount} key={uuid()} />
	))

	let newPostElement = React.createRef()

	function onAddPost(e) {
		e.preventDefault()
		props.addPost()
	}

	function onPostChange() {
		let text = newPostElement.current.value
		props.updateNewPostText(text)
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
						value={props.newPostText}
						className={styles.newPost__input}
					/>
					<button onClick={onAddPost} type='submit' className={styles.newPost__btn}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	)
}
