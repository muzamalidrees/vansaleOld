import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers/reducer-users';
import customersReducer from './reducers/reducer-customers';
import PGReducer from './reducers/reducer-PG'

const allReducers = combineReducers({ usersReducer, customersReducer, PGReducer });


let store = createStore(allReducers);

window.store = store

export default store