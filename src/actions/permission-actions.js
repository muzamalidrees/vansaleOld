const addNewPermission = (permission) => {

    return { type: "ADD_PERMISSION", payload: permission }

}
const setPermissions = (permissions) => {
    return { type: "SET_PERMISSIONS", payload: permissions }
}

export { addNewPermission, setPermissions }