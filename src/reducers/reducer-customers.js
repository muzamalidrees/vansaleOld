const customersReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_CUSTOMERS":
            return action.payload
        case "ADD_CUSTOMER":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default customersReducer