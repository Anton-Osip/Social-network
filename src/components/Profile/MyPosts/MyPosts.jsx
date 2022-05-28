import React from 'react'
import uuid from 'react-uuid'
import styles from './MyPosts.module.css'

import Post from './Post/Post'

export default function MyPosts(props) {
	const postsElements = props.posts.map(post => (
		<Post message={post.message} likeCount={post.likeCount} key={uuid()} />
	))
	let newPostElement = React.createRef()
	let addPost = e => {
		let text = newPostElement.current.value
		alert(text)
	}
	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input
						type='text'
						ref={newPostElement}
						// value='your news...'
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
