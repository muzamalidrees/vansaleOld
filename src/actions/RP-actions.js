const addNewRP = (RP) => {

    return { type: "ADD_RP", payload: RP }

}
const setRolesPermissions = (RPs) => {
    return { type: "SET_ROLES_PERMISSIONS", payload: RPs }
}

export { addNewRP, setRolesPermissions }