const RPReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROLES_PERMISSIONS":
            return action.payload
        case "ADD_RP":
            return [action.payload, ...state]
        case "REMOVE_RP":
            return state.filter((RP) => { return RP !== action.payload })
        default:
            return state
    }
}

export default RPReducer