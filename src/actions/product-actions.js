const addNewProduct = (product) => {

    return { type: "ADD_PRODUCT", payload: product }

}
const setProducts = (products) => {
    return { type: "SET_PRODUCTS", payload: products }
}
const removeProduct = (product) => {
    return { type: "REMOVE_PRODUCT", payload: product }
}

export { addNewProduct, setProducts, removeProduct }