const postsInitialState = []

const postsReducers = (state = postsInitialState, action ) => {
    switch(action.type) {
        case 'SET_USER_POSTS' : {
            return [...action.payload]
        }

        case 'RESET_USER_POSTS': {
            return postsInitialState
        }

        default: {
            return [...state]
        }
    }
}

export default postsReducers