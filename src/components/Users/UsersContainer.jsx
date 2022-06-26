import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	followAC,
	setUsersAC,
	unfollowAC,
	setCurrentPageAC,
	setUsersTotalCountAC,
	toggleIsFetchingAC,
} from '../../redux/user-reduser'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../commen/Preloader/Preloader'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
				this.props.setTotalUsersCount(response.data.totalCount)
			})
	}
	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios
			.get(
				`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
			)
			.then(response => {
				this.props.toggleIsFetching(false)
				this.props.setUsers(response.data.items)
			})
	}
	render() {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						currentPage={this.props.currentPage}
						onPageChanged={this.onPageChanged}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
						users={this.props.users}
					/>
				)}
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}
let mapDispatchToProps = dispatch => {
	return {
		follow: userId => {
			dispatch(followAC(userId))
		},
		unfollow: userId => {
			dispatch(unfollowAC(userId))
		},
		setUsers: users => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: currentPage => {
			dispatch(setCurrentPageAC(currentPage))
		},
		setTotalUsersCount: totalCount => {
			dispatch(setUsersTotalCountAC(totalCount))
		},
		toggleIsFetching: isFetching => {
			dispatch(toggleIsFetchingAC(isFetching))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
