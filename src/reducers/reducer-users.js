const usersReduser = (state = [''], action) => {

    switch (action.type) {
        case "ADD_USER":
            return [action.payload, ...state]
            break;
        case "SET_USERS":
            return action.payload
            break;
        default:
            return state
    }
}

export default usersReduser