const PCReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRODUCT_CATEGORIES":
            return action.payload
        case "ADD_PRODUCT_CATEGORY":
            return [action.payload, ...state]
        case "REMOVE_PC":
            return state.filter((productCategory) => { return productCategory !== action.payload })
        default:
            return state
    }
}

export default PCReducer