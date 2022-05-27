import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'
import uuid from 'react-uuid'

export default function MyPosts() {
	const postsData = [
		{ id: 1, message: 'Hey, why nobody love me?', likeCount: '10' },
		{ id: 2, message: "It's our new program! Hey!", likeCount: '25' },
		{ id: 3, message: 'Hey, why nobody love me?', likeCount: '10' },
		{ id: 4, message: "It's our new program! Hey!", likeCount: '25' },
		{ id: 5, message: 'Hey, why nobody love me?', likeCount: '10' },
		{ id: 6, message: "It's our new program! Hey!", likeCount: '25' },
	]
	const postsElements = postsData.map(post => (
		<Post message={post.message} likeCount={post.likeCount} key={uuid()} />
	))
	return (
		<div>
			<div className={styles.newPost}>
				<h3 className={styles.newPost__title}>My posts</h3>
				<form className={styles.newPost__form}>
					<input
						type='text'
						placeholder='your news...'
						className={styles.newPost__input}
					/>
					<button type='submit' className={styles.newPost__btn}>
						Send
					</button>
				</form>
			</div>
			<div className={styles.posts}>{postsElements}</div>
		</div>
	)
}
