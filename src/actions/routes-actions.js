const addNewRoute = (route) => {

    return { type: "ADD_ROUTE", payload: route }

}
const setRoutes = (routes) => {
    return { type: "SET_ROUTES", payload: routes }
}
const removeRoute = (route) => {
    return { type: "REMOVE_ROUTE", payload: route }
}


export { addNewRoute, setRoutes, removeRoute }