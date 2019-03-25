const routesReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROUTES":
            return action.payload
        case "SET_DRIVER_ROUTING":
            return action.payload
        case "ADD_ROUTE":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default routesReducer