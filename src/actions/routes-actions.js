const addNewRoute = (route) => {

    return { type: "ADD_ROUTE", payload: route }

}
const setRoutes = (routes) => {
    return { type: "SET_ROUTES", payload: routes }
}

export { addNewRoute, setRoutes }