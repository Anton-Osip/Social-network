import React from 'react'
import {
	addPostActionCreator,
	updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

export default function MyPostsContainer(props) {
	function addPost() {
		props.store.dispatch(addPostActionCreator())
	}

	function onPostChange(text) {
		let action = updateNewPostTextActionCreator(text)
		props.store.dispatch(action)
	}

	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={props.store.getState().profilePage.posts}
			newPostText={props.store.getState().profilePage.newPostText}
		/>
	)
}
