const addNewDriver = (driver) => {

    return { type: "ADD_DRIVER", payload: driver }

}
const setDrivers = (drivers) => {
    return { type: "SET_DRIVERS", payload: drivers }
}

export { addNewDriver, setDrivers }