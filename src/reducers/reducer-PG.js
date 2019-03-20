const PGReducer = (state = [''], action) => {

    switch (action.type) {
        case "ADD_PRICE_GROUP":
            return [action.payload, ...state]
            break;
        case "SET_PRICE_GROUPS":
            { return action.payload }
            break;
        case "SET_CUSTOMER_PRICING":
            return action.payload
            break;
        default:
            return state
    }
}

export default PGReducer