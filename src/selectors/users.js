export const selectuser = (users, id) => {
    return users.find(user => user.id == id)
}