const addNewCP = (cp) => {
    return { type: "ADD_CP", payload: cp }
}
const setCustomerPricing = (customerPriceGroups) => {
    return { type: "SET_CUSTOMER_PRICING", payload: customerPriceGroups }
}
const removeCP = (cp) => {
    return { type: "REMOVE_CP", payload: cp }
}

export { addNewCP, setCustomerPricing, removeCP }