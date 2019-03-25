const PGReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRICE_GROUPS":
            return action.payload
        case "SET_CUSTOMER_PRICING":
            return action.payload
        case "ADD_PRICE_GROUP":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default PGReducer