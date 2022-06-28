import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs.jsx'

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
	}
}

const DialogsContainer = withAuthRedirect(
	connect(mapStateToProps, {
		updateNewMessageBody,
		sendMessage,
	})(Dialogs),
)

export default DialogsContainer
