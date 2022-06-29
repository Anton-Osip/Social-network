import React, { Component } from 'react'
import styles from './ProfileStatus.module.css'

export default class ProfileStatus extends Component {
	state = {
		editMode: false,
	}

	activateEditMode = () => {
		this.setState({ editMode: true })
	}
	deactivateEditMode = () => {
		this.setState({ editMode: false })
	}

	render() {
		return (
			<div className={styles.profileStatus}>
				{!this.state.editMode && (
					<div>
						<span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
					</div>
				)}
				{this.state.editMode && (
					<div>
						<input autoFocus onBlur={this.deactivateEditMode} value={this.props.status}></input>
					</div>
				)}
			</div>
		)
	}
}