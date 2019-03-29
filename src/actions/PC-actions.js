const addNewProductCategory = (productCategory) => {

    return { type: "ADD_PRODUCT_CATEGORY", payload: productCategory }

}
const setProductCategories = (productCategories) => {
    return { type: "SET_PRODUCT_CATEGORIES", payload: productCategories }
}
const removePC = (productCategory) => {
    return { type: "REMOVE_PC", payload: productCategory }
}

export { addNewProductCategory, setProductCategories, removePC }