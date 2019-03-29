const areasReducer = (state = [], action) => {

    switch (action.type) {
        case "SET_AREAS":
            return action.payload
        case "ADD_AREA":
            return [action.payload, ...state]
        case "REMOVE_AREA":
            return state.filter((area) => { return area !== action.payload })
        default:
            return state
    }
}

export default areasReducer