const addNewRoute = (route) => {

    return { type: "ADD_ROUTE", payload: route }

}
const setRoutes = (routes) => {
    return { type: "SET_ROUTES", payload: routes }
}
const setDriverRouting = (DriverRoute) => {
    return { type: "SET_DRIVER_ROUTING", payload: DriverRoute }
}

export { addNewRoute, setRoutes, setDriverRouting }