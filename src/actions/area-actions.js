const addNewArea = (area) => {

    return { type: "ADD_AREA", payload: area }

}
const setAreas = (areas) => {
    return { type: "SET_AREAS", payload: areas }
}
const removeArea = (area) => {
    return { type: "REMOVE_AREA", payload: area }
}
export { addNewArea, setAreas, removeArea }