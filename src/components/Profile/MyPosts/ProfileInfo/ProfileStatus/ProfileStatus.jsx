import React, { Component } from 'react'
import styles from './ProfileStatus.module.css'

export default class ProfileStatus extends Component {
	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editMode: false })
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = event => {
		this.setState({
			status: event.currentTarget.value,
		})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({ status: this.props.status })
		}
	}

	render() {
		return (
			<div className={styles.profileStatus}>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input
							autoFocus
							onBlur={this.deactivateEditMode}
							value={this.state.status}
							onChange={this.onStatusChange}
						></input>
					</div>
				)}
			</div>
		)
	}
}
