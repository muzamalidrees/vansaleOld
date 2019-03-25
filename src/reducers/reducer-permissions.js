const permissionsReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PERMISSIONS":
            return action.payload
        case "ADD_PERMISSION":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default permissionsReducer