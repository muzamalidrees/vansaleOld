const addNewUser = (user) => {

    return { type: "ADD_USER", payload: user }

}
const setUsers = (users) => {
    return { type: "SET_USERS", payload: users }
}
const removeUser = (user) => {
    return { type: "REMOVE_USER", payload: user }
}

export { addNewUser, setUsers, removeUser }
