import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './user-reduser'
import authReducer from './auth-reducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

let store = createStore(reducers)
window.store = store
export default store
