import { usersAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
	posts: [
		{ id: 1, message: 'Hey, why nobody love me?', likeCount: '10' },
		{
			id: 2,
			message: "It's our new program! Hey!",
			likeCount: '25',
		},
	],
	newPostText: 'your news...',
	profile: null,
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				newPostText: '',
				posts: [
					{
						id: state.posts.length,
						message: state.newPostText,
						likeCount: 0,
					},
					...state.posts,
				],
			}
		}

		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.newText }
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile }
		}
		default:
			return state
	}
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})
export const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})

export const getUserProfile = userId => {
	return dispath => {
		usersAPI.getProfile(userId).then(response => {
			dispath(setUserProfile(response.data))
		})
	}
}

export default profileReducer
