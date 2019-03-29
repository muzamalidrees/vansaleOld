const rolesReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROLES":
            return action.payload
        case "ADD_ROLE":
            return [action.payload, ...state]
        case "REMOVE_ROLE":
            return state.filter((role) => { return role !== action.payload })
        default:
            return state
    }
}

export default rolesReducer