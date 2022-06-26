const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

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
		default:
			return state
	}
}

export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = text => ({
	type: UPDATE_NEW_POST_TEXT,
	newText: text,
})

export default profileReducer
