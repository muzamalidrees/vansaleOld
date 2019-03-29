const permissionsReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PERMISSIONS":
            return action.payload
        case "ADD_PERMISSION":
            return [action.payload, ...state]
        case "REMOVE_PERMISSION":
            return state.filter((permission) => { return permission !== action.payload })
        default:
            return state
    }
}

export default permissionsReducer