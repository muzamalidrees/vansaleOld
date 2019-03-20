const addNewCustomer = (customer) => {

    return { type: "ADD_CUSTOMER", payload: customer }

}
const setCustomers = (customers) => {
    return { type: "SET_CUSTOMERS", payload: customers }
}

export { addNewCustomer, setCustomers }