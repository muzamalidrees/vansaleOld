const customersReducer = (state = [''], action) => {

    switch (action.type) {
        case "ADD_CUSTOMER":
            return [action.payload, ...state]
            break;
        case "SET_CUSTOMERS":
            return action.payload
            break;
        default:
            return state
    }
}

export default customersReducer