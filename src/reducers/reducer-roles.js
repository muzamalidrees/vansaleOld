const rolesReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_ROLES":
            return action.payload
        case "ADD_ROLE":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default rolesReducer