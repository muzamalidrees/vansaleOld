const addNewRole = (role) => {

    return { type: "ADD_ROLE", payload: role }

}
const setRoles = (roles) => {
    return { type: "SET_ROLES", payload: roles }
}
const removeRole = (role) => {
    return { type: "REMOVE_ROLE", payload: role }
}

export { addNewRole, setRoles, removeRole }