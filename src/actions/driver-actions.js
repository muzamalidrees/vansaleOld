const addNewDriver = (driver) => {

    return { type: "ADD_DRIVER", payload: driver }

}
const setDrivers = (drivers) => {
    return { type: "SET_DRIVERS", payload: drivers }
}
const removeDriver = (driver) => {
    return { type: "REMOVE_DRIVER", payload: driver }
}
export { addNewDriver, setDrivers, removeDriver }