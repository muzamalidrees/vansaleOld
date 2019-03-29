const usersReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_USERS":
            return action.payload
        case "ADD_USER":
            return [action.payload, ...state]
        case "REMOVE_USER":
            return state.filter((user) => { return user !== action.payload })
        default:
            return state
    }
}

export default usersReducer