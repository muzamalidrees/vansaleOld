const driversReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_DRIVERS":
            return action.payload
        case "ADD_DRIVER":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default driversReducer