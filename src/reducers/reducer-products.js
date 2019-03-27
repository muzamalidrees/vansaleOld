const productsReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return action.payload
        case "ADD_PRODUCT":
            return [action.payload, ...state]
        case "REMOVE_PRODUCT":
            return state.filter((product) => { return product !== action.payload })
        default:
            return state
    }
}

export default productsReducer