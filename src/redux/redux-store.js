import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import profileReducer from './profile-reducer'
import sidebarReducer from './sidebar-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './user-reduser'
import authReducer from './auth-reducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))
window.store = store
export default store
