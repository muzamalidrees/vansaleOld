const PGReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_PRICE_GROUPS":
            return action.payload
        case "ADD_PRICE_GROUP":
            return [action.payload, ...state]
        case "REMOVE_PG":
            return state.filter((PG) => { return PG !== action.payload })
        default:
            return state
    }
}

export default PGReducer