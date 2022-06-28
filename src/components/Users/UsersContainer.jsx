import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	follow,
	setUsers,
	unfollow,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
} from '../../redux/user-reduser'
import Users from './Users'
import Preloader from '../commen/Preloader/Preloader'
import { getUsers } from '../../api/api'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setTotalUsersCount(data.totalCount)
		})
	}
	onPageChanged = pageNumber => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
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

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersContainer)
