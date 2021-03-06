import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers,
} from '../../redux/user-reduser'
import Users from './Users'
import Preloader from '../commen/Preloader/Preloader'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize)
	}
	onPageChanged = pageNumber => {
		this.props.getUsers(pageNumber, this.props.pageSize)
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
						followingInProgress={this.props.followingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default compose(
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers,
	}),
	withAuthRedirect,
)(UsersContainer)
