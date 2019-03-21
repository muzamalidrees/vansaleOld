const routesReducer = (state = [''], action) => {

    switch (action.type) {
        case "ADD_ROUTE":
            return [action.payload, ...state]
            break;
        case "SET_ROUTES":
            return action.payload
            break;
        default:
            return state
    }
}

export default routesReducer