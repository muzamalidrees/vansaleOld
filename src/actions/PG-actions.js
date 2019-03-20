const addNewPriceGroup = (priceGroup) => {

    return { type: "ADD_PRICE_GROUP", payload: priceGroup }

}
const setPriceGroups = (priceGroups) => {
    return { type: "SET_PRICE_GROUPS", payload: priceGroups }
}
const setCustomerPricing = (customerPriceGroup) => {
    return { type: "SET_CUSTOMER_PRICING", payload: customerPriceGroup }
}

export { addNewPriceGroup, setPriceGroups, setCustomerPricing }