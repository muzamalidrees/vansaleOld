const driversReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_DRIVERS":
            return action.payload
        case "ADD_DRIVER":
            return [action.payload, ...state]
        case "REMOVE_DRIVER":
            return state.filter((driver) => { return driver !== action.payload })
        default:
            return state
    }
}

export default driversReducer