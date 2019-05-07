const RPReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROLES_PERMISSIONS":
            return action.payload
        case "ADD_RP":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default RPReducer