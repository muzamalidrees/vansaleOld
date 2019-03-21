const driversReducer = (state = [''], action) => {

    switch (action.type) {
        case "ADD_DRIVER":
            return [action.payload, ...state]
            break;
        case "SET_DRIVERS":
            return action.payload
            break;
        default:
            return state
    }
}

export default driversReducer