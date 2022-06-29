import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': '854b5e60-b824-42c5-b09b-44bf20807a73' },
})
export const usersAPI = {
	getUsers: (currentPage, pageSize) => {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data
		})
	},
	unfollow: userId => {
		return instance.delete(`follow/${userId}`)
	},
	follow: userId => {
		return instance.post(`follow/${userId}`)
	},
	getProfile: userId => {
		console.warn('Obsolete method. Please profileAPI object')
		return profileAPI.getProfile(userId)
	},
}
export const profileAPI = {
	getProfile: userId => {
		return instance.get(`profile/${userId}`)
	},
	getStatus: userId => {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus: status => {
		return instance.put(`profile/status`, { status: status })
	},
}
export const authAPI = {
	me: () => {
		return instance.get('auth/me')
	},
}
