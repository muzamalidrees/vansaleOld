const addNewInventory = (item) => {

    return { type: "ADD_NEW_INVENTORY", payload: item }

}
const setInventory = (items) => {
    return { type: "SET_INVENTORY", payload: items }
}

const removeInventory = (item) => {
    return { type: "REMOVE_INVENTORY", payload: item }
}

export { addNewInventory, setInventory, removeInventory }