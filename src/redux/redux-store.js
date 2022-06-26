import { combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import dialogsReducer from './dialogs-reducer'
import UsersReducer from './user-reduser'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage: UsersReducer,
})

let store = createStore(reducers)
window.store = store
export default store
