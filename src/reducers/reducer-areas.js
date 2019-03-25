const areasReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_AREAS":
            return action.payload
        case "ADD_AREA":
            return [action.payload, ...state]
        default:
            return state
    }
}

export default areasReducer