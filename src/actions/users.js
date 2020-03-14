import axios from 'axios'

export const deleteUser = (user) => {
    return {
        type: 'DELETE_USER',
        payload: user
    }
}

export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data
            dispatch(setUsers(users))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const setUserPosts = (posts) => {
    return { type: 'SET_USER_POSTS', payload: posts}
}

export const startgetUserPosts = (uid) => {
    console.log(uid)
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${uid}`)
            .then(response => {
                const posts = response.data
                console.log('posts', posts)
                dispatch(setUserPosts(posts))
            })
    }
}

export const resetUserPosts = () => {
    return { type: 'RESET_USER_POSTS'}
}