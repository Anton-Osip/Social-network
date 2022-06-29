import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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
	status: 'status',
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
		case SET_STATUS: {
			return { ...state, status: action.status }
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
const setUserProfile = profile => ({
	type: SET_USER_PROFILE,
	profile,
})
const setStatus = status => ({
	type: SET_STATUS,
	status,
})

export const getUserProfile = userId => {
	return dispath => {
		profileAPI.getProfile(userId).then(response => {
			dispath(setUserProfile(response.data))
		})
	}
}
export const getStatus = userId => {
	return dispath => {
		profileAPI.getStatus(userId).then(response => {
			dispath(setStatus(response.data))
		})
	}
}
export const updateStatus = status => {
	return dispath => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispath(setStatus(status))
			}
		})
	}
}

export default profileReducer
