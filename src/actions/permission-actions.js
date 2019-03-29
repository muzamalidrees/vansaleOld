const addNewPermission = (permission) => {

    return { type: "ADD_PERMISSION", payload: permission }

}
const setPermissions = (permissions) => {
    return { type: "SET_PERMISSIONS", payload: permissions }
}
const removePermission = (permission) => {
    return { type: "REMOVE_PERMISSION", payload: permission }
}


export { addNewPermission, setPermissions, removePermission }