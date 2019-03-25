const PCReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRODUCT_CATEGORIES":
            return action.payload
        case "ADD_PRODUCT_CATEGORY":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default PCReducer