import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs.jsx'

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

export default compose(
	connect(mapStateToProps, {
		updateNewMessageBody,
		sendMessage,
	}),
	withAuthRedirect,
)(Dialogs)
