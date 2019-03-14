import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers/reducer-users'

const allReducers = combineReducers({usersReducer});


let store = createStore(allReducers);

// window.store = store

export default store