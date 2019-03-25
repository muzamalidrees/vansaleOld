const addNewArea = (area) => {

    return { type: "ADD_AREA", payload: area }

}
const setAreas = (areas) => {
    return { type: "SET_AREAS", payload: areas }
}

export { addNewArea, setAreas }