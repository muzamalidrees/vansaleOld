const addNewProduct = (product) => {

    return { type: "ADD_PRODUCT", payload: product }

}
const setProducts = (products) => {
    return { type: "SET_PRODUCTS", payload: products }
}

export { addNewProduct, setProducts }