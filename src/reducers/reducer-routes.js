const routesReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROUTES":
            return action.payload
        case "ADD_ROUTE":
            return [action.payload, ...state]
        case "REMOVE_ROUTE":
            return state.filter((route) => { return route !== action.payload })
        default:
            return state
    }
}

export default routesReducer