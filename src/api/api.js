import * as axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	withCredentials: true,
	headers: { 'API-KEY': '854b5e60-b824-42c5-b09b-44bf20807a73' },
})
export const usersAPI = {
    getUsers :(currentPage, pageSize) => {
	return axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data
		})
}
}