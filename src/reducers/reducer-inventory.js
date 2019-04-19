const inventoryReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_INVENTORY":
            return action.payload
        case "ADD_NEW_INVENTORY":
            return [action.payload, ...state]
        case "REMOVE_INVENTORY":
            return state.filter((item) => { return item !== action.payload })
        default:
            return state
    }
}

export default inventoryReducer