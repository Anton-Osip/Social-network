import { connect } from 'react-redux'
import Navbar from './Navbar'

let mapStateToProps = state => {
	return {
		links: state.sidebarPage.links,
		frends: state.sidebarPage.frends,
	}
}
let mapDispatchToProps = () => {
	return {}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default MyPostsContainer
