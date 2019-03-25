const productsReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return action.payload
        case "ADD_PRODUCT":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default productsReducer