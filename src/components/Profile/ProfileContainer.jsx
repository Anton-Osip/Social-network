import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from './../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

export function withRouter(Children) {
	return props => {
		const match = { params: useParams() }
		return <Children {...props} match={match} />
	}
}

class ProfileContainer extends Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = 23343
		}
		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = state => {
	return {
		profile: state.profilePage.profile,
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile }),
	withRouter,
	withAuthRedirect,
)(ProfileContainer)
