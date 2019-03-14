const addNewUser = (user) => {

    return { type: "ADD_USER", payload: user }

}
const setUsers = (users) => {
    return { type: "SET_USERS", payload: users }
}

export { addNewUser, setUsers }
