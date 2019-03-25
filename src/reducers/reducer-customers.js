const customersReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_CUSTOMERS":
            return action.payload
        case "ADD_CUSTOMER":
            return [action.payload, ...state]
        case "REMOVE_CUSTOMER":
            return state.filter((customer) => { return customer !== action.payload })
        default:
            return state
    }
}

export default customersReducer