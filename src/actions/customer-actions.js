const addNewCustomer = (customer) => {

    return { type: "ADD_CUSTOMER", payload: customer }

}
const setCustomers = (customers) => {
    return { type: "SET_CUSTOMERS", payload: customers }
}
const removeCustomer = (customer) => {
    return { type: "REMOVE_CUSTOMER", payload: customer }
}

export { addNewCustomer, setCustomers, removeCustomer }