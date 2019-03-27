const CPReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_CUSTOMER_PRICING":
            return action.payload
        case "ADD_CP":
            return [action.payload, ...state]
        case "REMOVE_CP":
            return state.filter((cp) => { return cp !== action.payload })
        default:
            return state
    }
}

export default CPReducer