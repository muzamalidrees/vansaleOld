const addNewPriceGroup = (priceGroup) => {

    return { type: "ADD_PRICE_GROUP", payload: priceGroup }

}
const setPriceGroups = (priceGroups) => {
    return { type: "SET_PRICE_GROUPS", payload: priceGroups }
}

const removePG = (PG) => {
    return { type: "REMOVE_PG", payload: PG }
}

export { addNewPriceGroup, setPriceGroups, removePG }