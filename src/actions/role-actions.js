const addNewRole = (role) => {

    return { type: "ADD_ROLE", payload: role }

}
const setRoles = (roles) => {
    return { type: "SET_ROLES", payload: roles }
}

export { addNewRole, setRoles }