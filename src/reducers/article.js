const articleInitialValue = [
    { id:1, name: 'Java script', published: false},
    { id:2, name: 'mern', published: false}
]

const articlesReducer = (state = articleInitialValue, action) => {

    switch(action.type) {

        case 'DELETE_ARTICLE' : {
            return state.filter(article => article.id !== action.payload)
        }

        case 'ADD_ARTICLE' : {
            return state.concat(action.payload)
        }

        default: {
            return   [...state]
        }
    }
}

export default articlesReducer