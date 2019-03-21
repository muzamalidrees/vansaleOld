import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers/reducer-users';
import customersReducer from './reducers/reducer-customers';
import PGReducer from './reducers/reducer-PG';
import driversReducer from './reducers/reducer-drivers';
import routesReducer from './reducers/reducer-routes';

const allReducers = combineReducers({
    usersReducer,
    customersReducer,
    PGReducer,
    driversReducer,
    routesReducer
});


let store = createStore(allReducers);

window.store = store

export default store