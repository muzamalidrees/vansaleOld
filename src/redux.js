import { createStore, combineReducers } from 'redux';
import usersReducer from './reducers/reducer-users';
import customersReducer from './reducers/reducer-customers';
import PGReducer from './reducers/reducer-PG';
import driversReducer from './reducers/reducer-drivers';
import routesReducer from './reducers/reducer-routes';
import productsReducer from './reducers/reducer-products';
import PCReducer from './reducers/reducer-PC';
import areasReducer from './reducers/reducer-areas';
import rolesReducer from './reducers/reducer-roles';
import permissionsReducer from './reducers/reducer-permissions';
import RPReducer from './reducers/reducer-RP';
import CPReducer from './reducers/reducer-CP';
import inventoryReducer from './reducers/reducer-inventory';
import loginReducer from './reducers/reducer-login';


const allReducers = combineReducers({
    usersReducer,
    customersReducer,
    PGReducer,
    driversReducer,
    routesReducer,
    productsReducer,
    PCReducer,
    areasReducer,
    rolesReducer,
    permissionsReducer,
    RPReducer,
    CPReducer,
    inventoryReducer,
    loginReducer
});


let store = createStore(allReducers);

window.store = store

export default store