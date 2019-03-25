const addNewProductCategory = (productCategory) => {

    return { type: "ADD_PRODUCT_CATEGORY", payload: productCategory }

}
const setProductCategories = (productCategories) => {
    return { type: "SET_PRODUCT_CATEGORIES", payload: productCategories }
}

export { addNewProductCategory, setProductCategories }