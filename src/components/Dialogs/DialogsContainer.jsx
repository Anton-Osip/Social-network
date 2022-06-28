import { connect } from 'react-redux'
import { sendMessage, updateNewMessageBody } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs.jsx'

let mapStateToProps = state => {
	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
	}
}
const DialogsContainer = connect(mapStateToProps, {
	updateNewMessageBody,
	sendMessage,
})(Dialogs)

export default DialogsContainer
